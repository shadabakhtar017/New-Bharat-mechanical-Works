import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, LogOut, X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../utils/supabase';

interface UserAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  promptMessage?: string;
}

export const UserAuthModal: React.FC<UserAuthModalProps> = ({ isOpen, onClose, promptMessage }) => {
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
          setSuccessMsg('Account created successfully! You are now signed in.');
          if (data.session) {
            setCurrentUser(data.session.user);
            setTimeout(() => {
              onClose();
            }, 1200);
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
          }, 1000);
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
    <div className="fixed inset-0 z-50 bg-[#090c10]/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0f141c] border border-white/10 w-full max-w-md rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] tracking-tight">
                {currentUser ? 'My Account' : isSignUp ? 'Create Account' : 'Sign In'}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
                {currentUser ? 'Client Portal' : 'New Bharat Mechanical Works'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {currentUser ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400">
                <User className="w-8 h-8" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400">Signed in as</span>
                <h4 className="text-base font-bold text-white mt-1 break-all">{currentUser.email}</h4>
              </div>

              {successMsg && (
                <div className="p-3.5 bg-amber-500/15 border border-amber-500/30 rounded-xl text-amber-300 text-xs">
                  {successMsg}
                </div>
              )}

              <button
                onClick={handleLogout}
                className="w-full bg-red-950/40 border border-red-900/50 text-red-300 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-900/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Optional Prompt Message Banner */}
              {promptMessage && (
                <div className="p-3.5 bg-amber-500/15 border border-amber-500/30 rounded-xl text-amber-300 text-xs flex items-center gap-2.5 font-medium leading-relaxed">
                  <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{promptMessage}</span>
                </div>
              )}

              {/* Tab Toggles */}
              <div className="grid grid-cols-2 border border-white/10 bg-white/[0.02] p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => { setIsSignUp(false); setError(''); setSuccessMsg(''); }}
                  className={`py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-lg cursor-pointer ${
                    !isSignUp ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => { setIsSignUp(true); setError(''); setSuccessMsg(''); }}
                  className={`py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-lg cursor-pointer ${
                    isSignUp ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {error && (
                <div className="p-3.5 bg-red-950/40 border border-red-900/50 rounded-xl text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {successMsg && (
                <div className="p-3.5 bg-amber-500/15 border border-amber-500/30 rounded-xl text-amber-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>{successMsg}</span>
                </div>
              )}

              <form onSubmit={handleAuth} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="name@example.com"
                      className="w-full bg-[#141b26] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••••••"
                      className="w-full bg-[#141b26] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin text-slate-950" /> : <User className="w-4 h-4 text-slate-950" />}
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                </button>
              </form>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#0f141c] px-3 text-slate-400 text-[10px] tracking-wider">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl text-white py-3 px-6 font-semibold text-xs uppercase tracking-wider hover:bg-white/[0.08] transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
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
