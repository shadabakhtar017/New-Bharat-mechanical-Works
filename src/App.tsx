/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AdminPanel } from './components/AdminPanel';
import { UserAuthModal } from './components/UserAuthModal';
import { supabase } from './utils/supabase';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authPromptMessage, setAuthPromptMessage] = useState<string | undefined>(undefined);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // 1. Initial auth check & First-time visit popup trigger
    supabase.auth.getSession().then(({ data: { session } }) => {
      const user = session?.user || null;
      setCurrentUser(user);

      // Check if user has visited before
      const hasVisited = localStorage.getItem('nbmw_has_visited');
      if (!hasVisited && !user) {
        // Show sign-in popup after 1.2s on first-ever visit
        const timer = setTimeout(() => {
          setAuthPromptMessage('Welcome to New Bharat Mechanical Works! Please sign in or create an account to access custom project estimates and booking features.');
          setIsAuthOpen(true);
          localStorage.setItem('nbmw_has_visited', 'true');
        }, 1200);

        return () => clearTimeout(timer);
      }
    });

    // 2. Listen to active auth changes across the app
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAuth = (promptMsg?: string) => {
    setAuthPromptMessage(promptMsg);
    setIsAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setIsAuthOpen(false);
    setAuthPromptMessage(undefined);
  };

  return (
    <div className="min-h-screen bg-[#090c10] text-[#f1f5f9] font-['Plus_Jakarta_Sans',sans-serif] pb-16 md:pb-0 relative selection:bg-amber-500 selection:text-slate-950">
      <Header
        onNavigate={handleNavigate}
        onOpenAuth={() => handleOpenAuth()}
        currentUser={currentUser}
      />
      <main>
        <Hero onExploreServices={() => handleNavigate('services')} />
        <TrustBar />
        <About />
        <WhyChooseUs />
        <ServicesSection />
        <Journey />
        <ProjectsGallery />
        <ProcessSection />
        <ContactSection
          currentUser={currentUser}
          onRequireAuth={(msg) => handleOpenAuth(msg)}
        />
      </main>
      <Footer onNavigate={handleNavigate} onOpenAdmin={() => setIsAdminOpen(true)} />
      <FloatingWhatsApp />
      <MobileBottomBar />
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      <UserAuthModal
        isOpen={isAuthOpen}
        onClose={handleCloseAuth}
        promptMessage={authPromptMessage}
      />
    </div>
  );
}
