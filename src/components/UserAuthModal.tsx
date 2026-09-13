import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, LogOut, X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../utils/supabase';

interface UserAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserAuthModal: React.FC<UserAuthModalProps> = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    if (isOpen) {
      checkUser();
    }
  }, [isOpen]);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setCurrentUser(session?.user || null);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccessMsg('');

    try {
      if (isSignUp) {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password: password.trim(),
        });

        if (signUpError) {
          setError(signUpError.message);
        } else {
          setSuccessMsg('Account created successfully! You can now sign in or you are logged in.');
          if (data.session) {
            setCurrentUser(data.session.user);
          }
        }
      } else {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: password.trim(),
        });

        if (signInError) {
          setError(signInError.message);
        } else {
          setCurrentUser(data.session?.user || null);
          setSuccessMsg('Signed in successfully!');
          setTimeout(() => {
            onClose();
          }, 1500);
        }
      }
    } catch (err: any) {
      setError(err?.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError('');
      const { error: googleError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (googleError) {
        setError(googleError.message);
      }
    } catch (err: any) {
      setError(err?.message || 'Error signing in with Google.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
    setSuccessMsg('Logged out successfully.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0F0F0F]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#141414] border border-[#2A2A2A] w-full max-w-md rounded-none shadow-2xl relative overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A2A2A] bg-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F5F5F0] font-['Space_Grotesk'] tracking-tight">
                {currentUser ? 'My Account' : isSignUp ? 'Create Account' : 'Sign In'}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-[#C5A059]">
                {currentUser ? 'Client Portal' : 'New Bharat Mechanical Works'}
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
        <div className="p-6 sm:p-8">
          {currentUser ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full flex items-center justify-center mx-auto text-[#C5A059]">
                <User className="w-8 h-8" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#A0A0A0]">Signed in as</span>
                <h4 className="text-base font-bold text-[#F5F5F0] mt-1 break-all">{currentUser.email}</h4>
              </div>

              {successMsg && (
                <div className="p-3 bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] text-xs">
                  {successMsg}
                </div>
              )}

              <button
                onClick={handleLogout}
                className="w-full bg-red-950/30 border border-red-900/50 text-red-300 py-3 px-6 font-bold text-xs uppercase tracking-widest hover:bg-red-900/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Tab Toggles */}
              <div className="grid grid-cols-2 border border-[#2A2A2A] bg-[#0F0F0F] p-1">
                <button
                  type="button"
                  onClick={() => { setIsSignUp(false); setError(''); setSuccessMsg(''); }}
                  className={`py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    !isSignUp ? 'bg-[#C5A059] text-[#F5F5F0]' : 'text-[#A0A0A0] hover:text-[#F5F5F0]'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => { setIsSignUp(true); setError(''); setSuccessMsg(''); }}
                  className={`py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    isSignUp ? 'bg-[#C5A059] text-[#F5F5F0]' : 'text-[#A0A0A0] hover:text-[#F5F5F0]'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {error && (
                <div className="p-3 bg-red-950/40 border border-red-900/50 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {successMsg && (
                <div className="p-3 bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              <form onSubmit={handleAuth} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#A0A0A0] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="name@example.com"
                      className="w-full bg-[#0F0F0F] border border-[#2A2A2A] pl-10 pr-4 py-3 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#A0A0A0] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••••••"
                      className="w-full bg-[#0F0F0F] border border-[#2A2A2A] pl-10 pr-4 py-3 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C5A059] text-[#F5F5F0] py-3.5 px-6 font-bold text-xs uppercase tracking-widest hover:bg-[#b08c4b] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <User className="w-4 h-4" />}
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                </button>
              </form>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#2A2A2A]"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#141414] px-2 text-[#A0A0A0] text-[10px] tracking-widest">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full bg-[#1a1a1a] border border-[#2A2A2A] text-[#F5F5F0] py-3 px-6 font-bold text-xs uppercase tracking-widest hover:bg-[#252525] transition-colors flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.1 8.9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.2-2 .4-2.7L1.6 6.4C.6 8.4 0 10.1 0 12s.6 3.6 1.6 5.6l3.7-2.9z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.3L1.6 15c1.9 3.8 5.8 8 10.4 8z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

