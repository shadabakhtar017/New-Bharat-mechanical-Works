import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SERVICES_DATA } from '../data/services';
import { Phone, MessageSquare, MapPin, Mail, Clock, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { openGeneralWhatsApp } from '../utils/whatsapp';
import { supabase } from '../utils/supabase';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_DATA[0].title,
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Save details strictly to Supabase backend table 'enquiries'
      const { error: dbError } = await supabase
        .from('enquiries')
        .insert([
          {
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            service: formData.service,
            details: formData.details.trim() || '',
            created_at: new Date().toISOString()
          }
        ]);

      if (dbError) {
        console.error('Supabase insert error:', dbError);
        setError(dbError.message || 'Failed to save to database. Please make sure the enquiries table is created in Supabase.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        service: SERVICES_DATA[0].title,
        details: ''
      });
    } catch (err: any) {
      console.error('Error saving to Supabase:', err);
      setError(err?.message || 'An unexpected error occurred while saving your details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#090c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-amber-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] mb-4 tracking-tight">
            Let's Build Something That Lasts.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Have a gate, fabrication, interior, railing, shutter, window or contracting requirement? Talk to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Details & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 shadow-2xl space-y-8 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-2">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal">
                  Reach out directly through phone, WhatsApp, or visit our workshop.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Call Us Anytime</span>
                    <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="text-lg font-bold text-white hover:text-amber-400 transition-colors">
                      {BUSINESS_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-sm">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">WhatsApp Chat</span>
                    <button onClick={openGeneralWhatsApp} className="text-base font-bold text-emerald-400 hover:underline text-left cursor-pointer">
                      Chat on WhatsApp →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Email Us</span>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-sm font-semibold text-white hover:text-amber-400 transition-colors">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Workshop Location</span>
                    <a
                      href={BUSINESS_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-white hover:text-amber-400 transition-colors underline decoration-amber-500/50 block"
                    >
                      {BUSINESS_CONFIG.address}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">{BUSINESS_CONFIG.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Working Hours</span>
                    <p className="text-xs font-medium text-white">{BUSINESS_CONFIG.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-2">
                Send Project Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-8 font-normal">
                Fill out the form below to submit your project details directly to our secure database.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-amber-400" />
                  <span>Enquiry submitted successfully and saved in our backend database!</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Rajesh Sharma"
                      required
                      className="w-full bg-[#0f141c] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:bg-[#141b26] focus:outline-none transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., +91 98765 43210"
                      required
                      className="w-full bg-[#0f141c] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:bg-[#141b26] focus:outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Select Required Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#0f141c] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:border-amber-500 focus:outline-none transition-all shadow-inner cursor-pointer"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-[#0f141c] text-white">
                        {srv.title}
                      </option>
                    ))}
                    <option value="General Contracting / Other" className="bg-[#0f141c] text-white">
                      General Contracting / Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Project Details & Dimensions (Optional)
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Describe your requirements, size, location, or timeline..."
                    className="w-full bg-[#0f141c] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:bg-[#141b26] focus:outline-none resize-none transition-all shadow-inner"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Saving to Database...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
