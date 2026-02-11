import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Users, GraduationCap, TrendingUp, MapPin, Smartphone, IndianRupee, Wrench, Mail, Phone, Heart } from 'lucide-react';
import SectionNav from './SectionNav';

export default function LandingPage() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'electrobeez'
  );

  return (
    <div className="min-h-screen bg-background">
      <SectionNav />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/20 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="/assets/generated/electrobeez-logo.dim_512x512.png" 
                alt="ElectroBeez" 
                className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6"
              />
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
              <Zap className="w-4 h-4" />
              <span>Empowering Electricians Nationwide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Fund the Future of <span className="text-primary">On-Demand Electrician Services</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              Help us build a revolutionary mobile platform connecting users with skilled electricians instantly. 
              Support electricians, empower ITI graduates, and boost the economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="#donate">Support Our Mission</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section - Near Top */}
      <section id="donate" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <IndianRupee className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
                  Scan & Pay to Support Us
                </CardTitle>
                <CardDescription className="text-lg text-foreground/70 mt-4">
                  Your contribution will directly impact thousands of electricians and ITI graduates across India
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary/20">
                    <img 
                      src="/assets/Screenshot_2026-02-10-23-21-11-15_b86b87620f0dd897e4c0859ecbb2d537.jpg" 
                      alt="Scan & Pay QR Code" 
                      className="w-full max-w-sm h-auto"
                    />
                  </div>
                </div>
                <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    How Your Donation Benefits the Community & Nation
                  </h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Electricians:</strong> Access to more customers and steady income through our platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>ITI Graduates:</strong> Kickstart careers with real placement opportunities and skill development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Economic Growth:</strong> Boost local economies by formalizing the electrician services sector</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Community Impact:</strong> Create thousands of jobs and improve service accessibility nationwide</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Our Project
            </h2>
            <p className="text-lg text-foreground/70">
              We're building a mobile application that revolutionizes how people find and book electricians
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">For Users</CardTitle>
                <CardDescription>
                  Find and book qualified electricians near you instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>View nearby electricians on an interactive map with distance information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Book services instantly with real-time availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IndianRupee className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Negotiate pricing directly within the app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Secure payment options and service guarantees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">For Electricians</CardTitle>
                <CardDescription>
                  Register as a business account and grow your customer base
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Receive instant notifications when users book your services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI-powered route suggestions for fastest customer reach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Access to more leads and consistent business opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Manage bookings, schedules, and payments in one place</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section id="budget" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Budget Breakdown
              </h2>
              <p className="text-lg text-foreground/70">
                We need <span className="text-primary font-bold text-2xl">₹5 Lakhs</span> to complete the mobile application
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    Mobile App Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-2">
                    <span className="font-semibold text-foreground text-xl">₹2,00,000</span>
                  </p>
                  <p className="text-sm text-foreground/60">
                    iOS and Android native app development with real-time features
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Maps & Location Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-2">
                    <span className="font-semibold text-foreground text-xl">₹75,000</span>
                  </p>
                  <p className="text-sm text-foreground/60">
                    Integration of mapping APIs, geolocation, and route optimization
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    AI & Backend Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-2">
                    <span className="font-semibold text-foreground text-xl">₹1,25,000</span>
                  </p>
                  <p className="text-sm text-foreground/60">
                    AI-powered routing, real-time notifications, and scalable backend
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-primary" />
                    Payment & Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-2">
                    <span className="font-semibold text-foreground text-xl">₹50,000</span>
                  </p>
                  <p className="text-sm text-foreground/60">
                    Secure payment gateway integration and data encryption
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Testing & Quality Assurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-2">
                    <span className="font-semibold text-foreground text-xl">₹30,000</span>
                  </p>
                  <p className="text-sm text-foreground/60">
                    Comprehensive testing across devices and user scenarios
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Marketing & Launch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-2">
                    <span className="font-semibold text-foreground text-xl">₹20,000</span>
                  </p>
                  <p className="text-sm text-foreground/60">
                    Initial marketing campaigns and app store optimization
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Total Budget Required</p>
                  <p className="text-3xl font-bold text-primary">₹5,00,000</p>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a href="#donate">Contribute Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Support This Project?
            </h2>
            <p className="text-lg text-foreground/70">
              Your contribution creates a ripple effect of positive change
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-border hover:border-primary/50 transition-colors text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Job Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Create employment opportunities for thousands of electricians and ITI graduates across India
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Economic Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Formalize the electrician services sector and contribute to India's digital economy growth
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Empower ITI graduates with practical training and real-world job placement opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Join us in revolutionizing the electrician services industry and creating opportunities for thousands
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6" asChild>
              <a href="#donate">Support ElectroBeez Today</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div>
                <img 
                  src="/assets/generated/electrobeez-logo-horizontal.dim_1200x300.png" 
                  alt="ElectroBeez" 
                  className="h-10 w-auto mb-4"
                />
                <p className="text-sm text-foreground/60">
                  Empowering electricians and connecting communities through innovative technology
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#budget" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                      Budget
                    </a>
                  </li>
                  <li>
                    <a href="#benefits" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href="#donate" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                      Donate
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="mailto:electrobeezindia@gmail.com"
                      className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>electrobeezindia@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+918638493216"
                      className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+91 86384 93216</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-foreground/60">
                © {currentYear} ElectroBeez. All rights reserved.
              </p>
              <p className="text-sm text-foreground/60 flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
                <a 
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
