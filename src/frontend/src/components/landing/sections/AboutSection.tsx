import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Wrench, MapPin, Zap, IndianRupee, TrendingUp, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Our Project
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We're building a mobile application that revolutionizes how people find and book electricians
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-surface border-primary/20 hover:border-primary/40 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">For Users</CardTitle>
                <CardDescription className="text-base">
                  Find and book qualified electricians near you instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { icon: MapPin, text: 'View nearby electricians on an interactive map with distance information' },
                    { icon: Zap, text: 'Book services instantly with real-time availability' },
                    { icon: IndianRupee, text: 'Negotiate pricing directly within the app' },
                    { icon: TrendingUp, text: 'Secure payment options and service guarantees' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/70">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-surface border-primary/20 hover:border-primary/40 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">For Electricians</CardTitle>
                <CardDescription className="text-base">
                  Register as a business account and grow your customer base
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { icon: Users, text: 'Receive instant notifications when users book your services' },
                    { icon: MapPin, text: 'AI-powered route suggestions for fastest customer reach' },
                    { icon: TrendingUp, text: 'Access to more leads and consistent business opportunities' },
                    { icon: Smartphone, text: 'Manage bookings, schedules, and payments in one place' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/70">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
