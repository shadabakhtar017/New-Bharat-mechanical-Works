/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#e2e8f0] font-['Plus_Jakarta_Sans',sans-serif] pb-16 md:pb-0">
      <Header onNavigate={handleNavigate} onOpenAuth={() => setIsAuthOpen(true)} />
      <main>
        <Hero onExploreServices={() => handleNavigate('services')} />
        <TrustBar />
        <About />
        <WhyChooseUs />
        <ServicesSection />
        <Journey />
        <ProjectsGallery />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer onNavigate={handleNavigate} onOpenAdmin={() => setIsAdminOpen(true)} />
      <FloatingWhatsApp />
      <MobileBottomBar />
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      <UserAuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
