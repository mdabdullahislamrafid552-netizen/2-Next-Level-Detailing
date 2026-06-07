import { StrictMode } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { ServicesAccordion } from './components/ServicesAccordion';
import { Principles } from './components/Principles';
import { Transition } from './components/Transition';
import { Testimonials } from './components/Testimonials';
import { TeslaFocus } from './components/TeslaFocus';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white selection:bg-[#094dad] selection:text-[#0B0C10]">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <ServicesAccordion />
        <Principles />
        <Transition />
        <Testimonials />
        <TeslaFocus />
      </main>
      <Footer />
    </div>
  );
}
