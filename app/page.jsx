'use client';

import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ServicesSection from './components/ServicesSection';
import WhyHueneuSection from './components/WhyHueneuSection';
import ContactForm from './components/ContactForm';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <WhyHueneuSection />
      <ContactForm />
    </main>
  );
}
