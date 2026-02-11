import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, TrendingUp, Zap, MapPin, IndianRupee } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    { icon: Users, title: 'Job Creation', desc: 'Create thousands of employment opportunities for electricians and ITI graduates across India' },
    { icon: GraduationCap, title: 'Skill Development', desc: 'Provide practical training and career advancement for technical graduates' },
    { icon: TrendingUp, title: 'Economic Growth', desc: 'Formalize the electrician services sector and boost local economies nationwide' },
    { icon: Zap, title: 'Instant Service', desc: 'Enable users to find and book qualified electricians within minutes' },
    { icon: MapPin, title: 'Better Reach', desc: 'Help electricians expand their customer base and service areas efficiently' },
    { icon: IndianRupee, title: 'Fair Pricing', desc: 'Transparent pricing and secure payment systems benefit both users and service providers' }
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Support This Project?
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Your contribution creates a ripple effect of positive change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <Card key={i} className="glass-surface border-primary/20 hover:border-primary/40 transition-all hover:scale-105 group text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
