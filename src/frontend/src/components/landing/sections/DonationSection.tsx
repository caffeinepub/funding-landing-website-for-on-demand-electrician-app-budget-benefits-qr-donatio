import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IndianRupee, Building2, Zap, Users, GraduationCap, TrendingUp } from 'lucide-react';

export default function DonationSection() {
  return (
    <section id="donate" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="glass-surface border-primary/30 shadow-2xl overflow-hidden">
            <CardHeader className="text-center pb-8 pt-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-3xl mx-auto mb-6 shadow-lg">
                <IndianRupee className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Support Us
              </CardTitle>
              <CardDescription className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Your contribution will directly impact thousands of electricians and ITI graduates across India
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8 pb-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Scan & Pay Section */}
                <div className="space-y-4">
                  <h3 className="font-bold text-2xl text-foreground text-center mb-6">Scan & Pay</h3>
                  
                  {/* YouTube Video Embed */}
                  <div className="mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/WjBwEiAExZs"
                        title="ElectroBeez Support Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="flex justify-center">
                    <div className="glass-surface p-8 rounded-2xl shadow-xl border-2 border-primary/30 hover:border-primary/50 transition-all">
                      <img 
                        src="/assets/Screenshot_2026-02-15-13-24-14-54_4336b74596784d9a2aa81f87c2016f50-1.jpg" 
                        alt="Scan & Pay QR Code" 
                        className="w-full max-w-xs h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Bank Details Section */}
                <div className="space-y-4">
                  <h3 className="font-bold text-2xl text-foreground text-center mb-6">Bank Transfer</h3>
                  <div className="glass-surface p-8 rounded-2xl border-2 border-primary/30 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 font-medium mb-1">Bank Name</p>
                        <p className="text-foreground font-bold text-lg">Punjab National Bank</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IndianRupee className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 font-medium mb-1">Account Number</p>
                        <p className="text-foreground font-bold text-lg">0747010213936</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 font-medium mb-1">IFSC Code</p>
                        <p className="text-foreground font-bold text-lg">PUNB0074720</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-surface p-8 rounded-2xl border border-primary/20">
                <h3 className="font-bold text-xl text-foreground mb-6">
                  How Your Donation Benefits the Community & Nation
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: Zap, title: 'Electricians', desc: 'Access to more customers and steady income through our platform' },
                    { icon: GraduationCap, title: 'ITI Graduates', desc: 'Kickstart careers with real placement opportunities and skill development' },
                    { icon: TrendingUp, title: 'Economic Growth', desc: 'Boost local economies by formalizing the electrician services sector' },
                    { icon: Users, title: 'Community Impact', desc: 'Create thousands of jobs and improve service accessibility nationwide' }
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">{benefit.title}</p>
                        <p className="text-sm text-foreground/60">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
