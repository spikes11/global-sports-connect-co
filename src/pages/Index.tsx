import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Users, Briefcase, MessageSquare, Search, Trophy, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-athletes.jpg";

const features = [
  {
    icon: Users,
    title: "Athlete Profiles",
    description: "Showcase your skills with highlight videos, stats, and achievements to get noticed by teams worldwide.",
  },
  {
    icon: Briefcase,
    title: "Recruitment Marketplace",
    description: "Teams post opportunities. Athletes apply directly. International recruitment made simple.",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    description: "Search athletes by sport, position, age, and nationality. Find the perfect fit for your roster.",
  },
  {
    icon: MessageSquare,
    title: "Direct Messaging",
    description: "Connect directly with athletes or teams. Share videos, negotiate terms, and close deals.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Break borders. Connect with talent and opportunities across every continent.",
  },
  {
    icon: Trophy,
    title: "Verified Profiles",
    description: "Verified badges for legitimate teams and standout athletes. Trust the talent.",
  },
];

const stats = [
  { value: "50K+", label: "Athletes" },
  { value: "2,000+", label: "Teams" },
  { value: "120+", label: "Countries" },
  { value: "10K+", label: "Placements" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Globe className="h-7 w-7 text-primary" />
            <span className="font-display text-xl tracking-wider">GAN</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/feed">
              <Button variant="ghost" size="sm">Explore</Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Athletes in action"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <Globe className="h-4 w-4" />
              Global Athlete Network
            </div>
            <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Where <span className="text-gradient">Athletes</span> Meet{" "}
              <span className="text-gradient">Opportunity</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              The world's premier platform for overseas athletes and sports teams.
              Showcase your talent. Discover opportunities. Go global.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button variant="hero" size="xl">
                  Join as Athlete
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="hero-outline" size="xl">
                  Recruit Talent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
            Everything You Need to <span className="text-gradient">Go Pro</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Whether you're an athlete looking for your next contract or a team searching for the perfect recruit, GAN has you covered.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-gradient-card p-6 shadow-card transition-all hover:border-primary/30 hover:shadow-glow"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
            Ready to Go <span className="text-gradient">Global</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
            Join thousands of athletes and teams already connecting on Global Athlete Network.
          </p>
          <Link to="/signup">
            <Button variant="hero" size="xl">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <span className="font-display text-sm tracking-wider">Global Athlete Network</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 GAN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
