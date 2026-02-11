import { Mail, Phone, Heart } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'electrobeez'
  );

  return (
    <footer className="relative py-16 border-t border-primary/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <img 
                src="/assets/generated/electrobeez-logo-horizontal.dim_1200x300.png" 
                alt="ElectroBeez" 
                className="h-12 mb-4"
              />
              <p className="text-foreground/60 text-sm">
                Revolutionizing electrician services across India through technology and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'About', href: '#about' },
                  { label: 'Budget', href: '#budget' },
                  { label: 'Benefits', href: '#benefits' },
                  { label: 'Donate', href: '#donate' }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2 text-sm text-foreground/60">
                <p className="font-semibold text-foreground">Directors:</p>
                <p>Kamal Sing Bhumij</p>
                <p>Jugensing Tokbi</p>
                <p>David Gogoi</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a href={`mailto:${CONTACT.email}`} className="text-foreground/60 hover:text-primary transition-colors">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <a href={`tel:${CONTACT.phone.raw}`} className="text-foreground/60 hover:text-primary transition-colors">
                    {CONTACT.phone.display}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>© {currentYear} ElectroBeez. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
