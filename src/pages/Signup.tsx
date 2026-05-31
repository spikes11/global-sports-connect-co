import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe, ArrowLeft, Users, Trophy } from "lucide-react";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"type" | "details">("type");
  const [profileType, setProfileType] = useState<"athlete" | "team">("athlete");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
          profile_type: profileType,
        },
        emailRedirectTo: window.location.origin,
      },
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created! Check your email to confirm.");
      navigate("/feed");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <Globe className="h-8 w-8 text-primary" />
          <span className="font-display text-2xl tracking-wider">GAN</span>
        </Link>

        <div className="rounded-xl border border-border bg-gradient-card p-8 shadow-card">
          {step === "type" ? (
            <>
              <h1 className="mb-2 text-center font-display text-2xl font-bold">Join GAN</h1>
              <p className="mb-6 text-center text-sm text-muted-foreground">
                How will you use the platform?
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => { setProfileType("athlete"); setStep("details"); }}
                  className="group flex flex-col items-center gap-3 rounded-xl border-2 border-border p-6 transition-all hover:border-primary hover:shadow-glow"
                >
                  <Trophy className="h-10 w-10 text-primary" />
                  <span className="font-display text-lg font-semibold">Athlete</span>
                  <span className="text-xs text-muted-foreground text-center">
                    Showcase skills & find opportunities
                  </span>
                </button>
                <button
                  onClick={() => { setProfileType("team"); setStep("details"); }}
                  className="group flex flex-col items-center gap-3 rounded-xl border-2 border-border p-6 transition-all hover:border-primary hover:shadow-glow"
                >
                  <Users className="h-10 w-10 text-primary" />
                  <span className="font-display text-lg font-semibold">Team</span>
                  <span className="text-xs text-muted-foreground text-center">
                    Recruit talent & post opportunities
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setStep("type")}
                className="mb-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <h1 className="mb-2 text-center font-display text-2xl font-bold">
                {profileType === "athlete" ? "Athlete" : "Team"} Sign Up
              </h1>
              <p className="mb-6 text-center text-sm text-muted-foreground">
                Create your {profileType} account
              </p>
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <Label htmlFor="name">
                    {profileType === "athlete" ? "Full Name" : "Team / Organization Name"}
                  </Label>
                  <Input
                    id="name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder={profileType === "athlete" ? "Marcus Silva" : "FC Barcelona Academy"}
                    className="mt-1 bg-secondary border-border"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-1 bg-secondary border-border"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="mt-1 bg-secondary border-border"
                    required
                    minLength={6}
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full" disabled={loading}>
                  {loading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </>
          )}

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">Log in</Link>
          </p>
        </div>

        <div className="mt-4 text-center">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
