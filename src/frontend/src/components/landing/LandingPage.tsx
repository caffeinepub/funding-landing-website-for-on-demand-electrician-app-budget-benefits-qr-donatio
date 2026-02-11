import SectionNav from './SectionNav';
import AmbientBackground from './AmbientBackground';
import HeroSection from './sections/HeroSection';
import DonationSection from './sections/DonationSection';
import AboutSection from './sections/AboutSection';
import BudgetSection from './sections/BudgetSection';
import BenefitsSection from './sections/BenefitsSection';
import FooterSection from './sections/FooterSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <AmbientBackground />
      <SectionNav />
      
      <main className="relative z-10">
        <HeroSection />
        <DonationSection />
        <AboutSection />
        <BudgetSection />
        <BenefitsSection />
      </main>
      
      <FooterSection />
    </div>
  );
}
