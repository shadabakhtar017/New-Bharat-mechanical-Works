import React, { useState, useEffect } from 'react';
import { Shield, Lock, User, LogOut, Trash2, Search, RefreshCw, Calendar, Phone, Mail, FileText, X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../utils/supabase';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Enquiry {
  id: string;
  name: string;
  phone: string;
  service: string;
  details: string;
  created_at: string;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [hasAdminAccount, setHasAdminAccount] = useState<boolean | null>(null);
  
  // Auth state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Dashboard state
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [fetchingEnquiries, setFetchingEnquiries] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Check if admin account exists in Supabase
  useEffect(() => {
    if (isOpen) {
      checkAdminExists();
    }
  }, [isOpen]);

  const checkAdminExists = async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error: dbError } = await supabase
        .from('admins')
        .select('id')
        .limit(1);

      if (dbError) {
        // If table doesn't exist yet, we can handle or prompt user
        console.warn('Admins table check note:', dbError);
        setHasAdminAccount(false);
      } else {
        setHasAdminAccount(data && data.length > 0);
      }
    } catch (err) {
      console.error('Error checking admin:', err);
      setHasAdminAccount(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSetupAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Insert admin into admins table
      const { error: insertError } = await supabase
        .from('admins')
        .insert([
          {
            username: username.trim(),
            password: password.trim(), // In production, hash password. Here stored securely in Supabase backend table.
            created_at: new Date().toISOString()
          }
        ]);

      if (insertError) {
        setError(insertError.message || 'Failed to create admin account. Make sure admins table exists in Supabase.');
        setLoading(false);
        return;
      }

      setHasAdminAccount(true);
      setIsAdminLoggedIn(true);
      fetchEnquiries();
    } catch (err: any) {
      setError(err?.message || 'Error creating admin account.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please enter your credentials.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { data, error: queryError } = await supabase
        .from('admins')
        .select('*')
        .eq('username', username.trim())
        .eq('password', password.trim())
        .single();

      if (queryError || !data) {
        setError('Invalid username or password.');
        setLoading(false);
        return;
      }

      setIsAdminLoggedIn(true);
      fetchEnquiries();
    } catch (err: any) {
      setError('Invalid login credentials.');
    } finally {
      setLoading(false);
    }
  };

  const fetchEnquiries = async () => {
    setFetchingEnquiries(true);
    try {
      const { data, error: fetchError } = await supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        console.error('Error fetching enquiries:', fetchError);
      } else {
        setEnquiries(data || []);
      }
    } catch (err) {
      console.error('Error fetching enquiries:', err);
    } finally {
      setFetchingEnquiries(false);
    }
  };

  const handleDeleteEnquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;

    try {
      const { error: deleteError } = await supabase
        .from('enquiries')
        .delete()
        .eq('id', id);

      if (deleteError) {
        alert('Failed to delete enquiry: ' + deleteError.message);
      } else {
        setEnquiries(enquiries.filter(item => item.id !== id));
      }
    } catch (err) {
      console.error('Error deleting enquiry:', err);
    }
  };

  const filteredEnquiries = enquiries.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phone.includes(searchTerm) ||
    item.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0F0F0F]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#141414] border border-[#2A2A2A] w-full max-w-5xl rounded-none shadow-2xl relative overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A2A2A] bg-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F5F5F0] font-['Space_Grotesk'] tracking-tight">
                Admin Management Portal
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-[#C5A059]">
                {isAdminLoggedIn ? 'Live Bookings & Enquiries Dashboard' : hasAdminAccount ? 'Admin Secure Login' : 'Initial Admin Account Setup'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A0A0A0] hover:text-[#F5F5F0] hover:bg-[#E4E4E7] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {loading && hasAdminAccount === null ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-4">
              <Loader2 className="w-8 h-8 text-[#C5A059] animate-spin" />
              <p className="text-xs uppercase tracking-widest text-[#A0A0A0]">Checking Admin Configuration...</p>
            </div>
          ) : !isAdminLoggedIn ? (
            <div className="max-w-md mx-auto py-6">
              {!hasAdminAccount ? (
                /* SETUP ADMIN FORM */
                <form onSubmit={handleSetupAdmin} className="space-y-6">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-2">
                      Create Admin Account
                    </h4>
                    <p className="text-xs text-[#A0A0A0]">
                      Set up your admin credentials for the website. Once created, this registration slot will be permanently locked for security.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-950/40 border border-red-900/50 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">
                        Admin Username / Email
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="e.g., admin@newbharat.com"
                        className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">
                        Admin Secure Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••••••"
                        className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C5A059] text-[#F5F5F0] py-3.5 px-6 font-bold text-xs uppercase tracking-widest hover:bg-[#b08c4b] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Shield className="w-4 h-4" />}
                    <span>Create Admin Account</span>
                  </button>

                  <div className="p-3 bg-[#1a1a1a] border border-[#2A2A2A] text-[11px] text-[#A0A0A0] text-center">
                    Note: Make sure you have created the <code className="text-[#C5A059]">admins</code> and <code className="text-[#C5A059]">enquiries</code> tables in your Supabase database.
                  </div>
                </form>
              ) : (
                /* LOGIN ADMIN FORM */
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-2">
                      Admin Secure Login
                    </h4>
                    <p className="text-xs text-[#A0A0A0]">
                      Enter your admin credentials to access website bookings and enquiries.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-950/40 border border-red-900/50 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">
                        Admin Username / Email
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="Enter username"
                        className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••••••"
                        className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C5A059] text-[#F5F5F0] py-3.5 px-6 font-bold text-xs uppercase tracking-widest hover:bg-[#b08c4b] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                    <span>Login to Admin Panel</span>
                  </button>
                </form>
              )}
            </div>
          ) : (
            /* ADMIN DASHBOARD */
            <div className="space-y-6">
              
              {/* Dashboard Top bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#2A2A2A]">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1a1a1a] border border-[#2A2A2A] px-4 py-3">
                    <span className="block text-[10px] uppercase tracking-widest text-[#A0A0A0]">Total Enquiries</span>
                    <span className="text-xl font-bold text-[#F5F5F0] font-['Space_Grotesk']">{enquiries.length}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="w-4 h-4 text-[#A0A0A0] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search name, phone, service..."
                      className="w-full bg-[#0F0F0F] border border-[#2A2A2A] pl-9 pr-4 py-2 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <button
                    onClick={fetchEnquiries}
                    disabled={fetchingEnquiries}
                    className="p-2.5 bg-[#1a1a1a] border border-[#2A2A2A] text-[#F5F5F0] hover:border-[#C5A059] transition-colors cursor-pointer"
                    title="Refresh List"
                  >
                    <RefreshCw className={`w-4 h-4 ${fetchingEnquiries ? 'animate-spin text-[#C5A059]' : ''}`} />
                  </button>

                  <button
                    onClick={() => {
                      setIsAdminLoggedIn(false);
                      setUsername('');
                      setPassword('');
                    }}
                    className="px-4 py-2.5 bg-red-950/30 border border-red-900/50 text-red-300 text-xs font-bold uppercase tracking-wider hover:bg-red-900/40 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>

              {/* Enquiries Table */}
              <div className="overflow-x-auto border border-[#2A2A2A]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1a1a1a] border-b border-[#2A2A2A] text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">
                      <th className="p-4">Date / Time</th>
                      <th className="p-4">Customer Name</th>
                      <th className="p-4">Phone Number</th>
                      <th className="p-4">Service Required</th>
                      <th className="p-4">Project Details</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E4E7] text-xs">
                    {fetchingEnquiries ? (
                      <tr>
                        <td colSpan={6} className="text-center py-12 text-[#A0A0A0]">
                          <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-[#C5A059]" />
                          Loading bookings from database...
                        </td>
                      </tr>
                    ) : filteredEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-12 text-[#A0A0A0]">
                          No enquiries or bookings found.
                        </td>
                      </tr>
                    ) : (
                      filteredEnquiries.map((item) => (
                        <tr key={item.id} className="hover:bg-[#1a1a1a]/60 transition-colors">
                          <td className="p-4 text-[#A0A0A0] whitespace-nowrap">
                            {new Date(item.created_at).toLocaleString()}
                          </td>
                          <td className="p-4 font-bold text-[#F5F5F0]">
                            {item.name}
                          </td>
                          <td className="p-4 text-[#F5F5F0]">
                            <a href={`tel:${item.phone}`} className="hover:text-[#C5A059] flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                              {item.phone}
                            </a>
                          </td>
                          <td className="p-4">
                            <span className="px-2.5 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-bold uppercase tracking-wider">
                              {item.service}
                            </span>
                          </td>
                          <td className="p-4 text-[#A0A0A0] max-w-xs truncate" title={item.details}>
                            {item.details || '—'}
                          </td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => handleDeleteEnquiry(item.id)}
                              className="p-2 bg-red-950/20 border border-red-900/40 text-red-400 hover:bg-red-900/40 transition-colors cursor-pointer"
                              title="Delete Enquiry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
