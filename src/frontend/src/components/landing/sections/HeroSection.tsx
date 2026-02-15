import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Sparkles, TrendingUp } from 'lucide-react';

// Required video ID for hero section
const HERO_VIDEO_ID = 'LGxjck40R44';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-8 max-w-3xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                  src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}`}
                  title="ElectroBeez Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 glass-surface px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/30 shadow-lg">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary">Empowering Electricians Nationwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Fund the Future of{' '}
              <span className="text-primary relative inline-block">
                On-Demand
                <div className="absolute inset-0 bg-primary/10 blur-2xl -z-10" />
              </span>
              {' '}Electrician Services
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Help us build a revolutionary mobile platform connecting users with skilled electricians instantly. 
              Support electricians, empower ITI graduates, and boost the economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="#donate">
                  <Zap className="w-5 h-5 mr-2" />
                  Support Our Mission
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-surface border-primary/30 hover:border-primary/50 hover:bg-primary/5 px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
                asChild
              >
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: 'Instant Connect', desc: 'Find electricians in seconds' },
              { icon: TrendingUp, title: 'Boost Economy', desc: 'Create thousands of jobs' },
              { icon: Sparkles, title: 'AI-Powered', desc: 'Smart routing & matching' }
            ].map((feature, i) => (
              <Card key={i} className="glass-surface border-primary/20 hover:border-primary/40 transition-all hover:scale-105 group">
                <CardContent className="pt-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/60">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
