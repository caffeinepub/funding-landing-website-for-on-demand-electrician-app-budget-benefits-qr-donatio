import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, Phone } from 'lucide-react';

export default function SectionNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#budget', label: 'Budget' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#donate', label: 'Donate' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <img 
              src="/assets/generated/electrobeez-logo-horizontal.dim_1200x300.png" 
              alt="ElectroBeez" 
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="mailto:electrobeezindia@gmail.com"
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden xl:inline">electrobeezindia@gmail.com</span>
            </a>
            <a 
              href="tel:+918638493216"
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 86384 93216</span>
            </a>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="#donate" onClick={(e) => handleNavClick(e, '#donate')}>
                Support Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 py-2 space-y-2 border-t border-border mt-2 pt-4">
                <a 
                  href="mailto:electrobeezindia@gmail.com"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>electrobeezindia@gmail.com</span>
                </a>
                <a 
                  href="tel:+918638493216"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 86384 93216</span>
                </a>
              </div>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
                asChild
              >
                <a href="#donate" onClick={(e) => handleNavClick(e, '#donate')}>
                  Support Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
