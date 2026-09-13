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
    <section id="contact" className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-4 tracking-tight">
            Let's Build Something That Lasts.
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            Have a gate, fabrication, interior, railing, shutter, window or contracting requirement? Talk to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 shadow-lg space-y-8 transition-all duration-300 hover:shadow-2xl">
              <div>
                <h3 className="text-2xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-2">
                  Contact Information
                </h3>
                <p className="text-xs text-[#A0A0A0]">
                  Reach out directly through phone, WhatsApp, or visit our workshop.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-lg flex items-center justify-center text-[#C5A059] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#A0A0A0]">Call Us Anytime</span>
                    <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="text-lg font-bold text-[#F5F5F0] hover:text-[#C5A059] transition-colors">
                      {BUSINESS_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#25D366]/15 border border-[#25D366]/30 rounded-lg flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#A0A0A0]">WhatsApp Chat</span>
                    <button onClick={openGeneralWhatsApp} className="text-base font-bold text-[#25D366] hover:underline text-left cursor-pointer">
                      Chat on WhatsApp →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-lg flex items-center justify-center text-[#C5A059] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#A0A0A0]">Email Us</span>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-sm font-semibold text-[#F5F5F0] hover:text-[#C5A059] transition-colors">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-lg flex items-center justify-center text-[#C5A059] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#A0A0A0]">Workshop Location</span>
                    <a
                      href={BUSINESS_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#F5F5F0] hover:text-[#C5A059] transition-colors underline decoration-[#C5A059]/50 block"
                    >
                      {BUSINESS_CONFIG.address}
                    </a>
                    <p className="text-[10px] text-[#A0A0A0] mt-0.5">{BUSINESS_CONFIG.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-lg flex items-center justify-center text-[#C5A059] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#A0A0A0]">Working Hours</span>
                    <p className="text-xs font-medium text-[#F5F5F0]">{BUSINESS_CONFIG.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 sm:p-10 shadow-lg transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-2">
                Send Project Enquiry
              </h3>
              <p className="text-xs text-[#A0A0A0] mb-8">
                Fill out the form below to submit your project details directly to our secure database.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-lg text-[#C5A059] text-xs font-bold uppercase tracking-wider flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Enquiry submitted successfully and saved in our backend database!</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500/15 border border-red-500/40 rounded-lg text-red-400 text-xs font-bold uppercase tracking-wider">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Rajesh Sharma"
                      required
                      className="w-full bg-[#F4F4F5] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#F5F5F0] placeholder-[#555] focus:border-[#C5A059] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">
                      Your Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., +91 98765 43210"
                      required
                      className="w-full bg-[#F4F4F5] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#F5F5F0] placeholder-[#555] focus:border-[#C5A059] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">
                    Select Required Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#F5F5F0] focus:border-[#C5A059] focus:outline-none transition-colors"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-[#141414] text-[#F5F5F0]">
                        {srv.title}
                      </option>
                    ))}
                    <option value="General Contracting / Other" className="bg-[#141414] text-[#F5F5F0]">
                      General Contracting / Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] mb-2">
                    Project Details & Dimensions (Optional)
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Describe your requirements, size, location, or timeline..."
                    className="w-full bg-[#F4F4F5] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#F5F5F0] placeholder-[#555] focus:border-[#C5A059] focus:outline-none resize-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#C5A059] text-[#F5F5F0] rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#b08c4b] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving to Database...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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


