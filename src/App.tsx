import { Navbar, Hero, Services, HowItWorks, Pricing, Contact, Footer, WhatsAppButton } from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-primary text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Pricing Section */}
        <Pricing />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
