import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, MapPin, Zap, IndianRupee, Users, TrendingUp } from 'lucide-react';

export default function BudgetSection() {
  const budgetItems = [
    { icon: Smartphone, title: 'Mobile App Development', amount: '₹2,00,000', desc: 'iOS and Android native app development with real-time features' },
    { icon: MapPin, title: 'Maps & Location Services', amount: '₹75,000', desc: 'Integration of mapping APIs, geolocation, and route optimization' },
    { icon: Zap, title: 'AI & Backend Infrastructure', amount: '₹1,25,000', desc: 'AI-powered routing, real-time notifications, and scalable backend' },
    { icon: IndianRupee, title: 'Payment & Security', amount: '₹50,000', desc: 'Secure payment gateway integration and data encryption' },
    { icon: Users, title: 'Testing & Quality Assurance', amount: '₹30,000', desc: 'Comprehensive testing across devices and user scenarios' },
    { icon: TrendingUp, title: 'Marketing & Launch', amount: '₹20,000', desc: 'Initial marketing campaigns and app store optimization' }
  ];

  return (
    <section id="budget" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Budget Breakdown
            </h2>
            <p className="text-xl text-foreground/70">
              We need <span className="text-primary font-bold text-3xl">₹5 Lakhs</span> to complete the mobile application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {budgetItems.map((item, i) => (
              <Card key={i} className="glass-surface border-primary/20 hover:border-primary/40 transition-all hover:scale-105 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-3">{item.amount}</p>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-surface border-2 border-primary/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div>
                  <p className="text-sm text-foreground/60 mb-2 font-medium">Total Budget Required</p>
                  <p className="text-5xl font-bold text-primary">₹5,00,000</p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 px-8 py-6 text-lg font-semibold"
                  asChild
                >
                  <a href="#donate">
                    <IndianRupee className="w-5 h-5 mr-2" />
                    Contribute Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
