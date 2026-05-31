import { BadgeCheck, MapPin, Calendar, Ruler, Weight, Flag, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockAthletes } from "@/lib/mockData";

const athlete = mockAthletes[0];

const Profile = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Cover */}
      <div className="relative h-48 overflow-hidden rounded-xl bg-gradient-to-r from-secondary to-muted md:h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Profile header */}
      <div className="relative -mt-16 px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:gap-6">
          <img
            src={athlete.avatar}
            alt={athlete.name}
            className="h-28 w-28 rounded-full border-4 border-background object-cover ring-2 ring-primary/30"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="font-display text-3xl font-bold">{athlete.name}</h1>
              {athlete.verified && <BadgeCheck className="h-6 w-6 text-primary" />}
            </div>
            <p className="text-muted-foreground">
              {athlete.sport} · {athlete.position}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="hero" size="default">Contact</Button>
            <Button variant="outline" size="default">Follow</Button>
          </div>
        </div>

        {/* Info grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { icon: MapPin, label: "Location", value: athlete.location },
            { icon: Flag, label: "Nationality", value: athlete.nationality },
            { icon: Calendar, label: "Age", value: `${athlete.age} years` },
            { icon: Ruler, label: "Height", value: athlete.height },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-border bg-gradient-card p-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </div>
              <div className="mt-1 text-sm font-medium">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-6 rounded-xl border border-border bg-gradient-card p-5">
          <h2 className="mb-4 font-display text-lg font-bold">Career Stats</h2>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(athlete.stats).map(([key, val]) => (
              <div key={key} className="text-center">
                <div className="font-display text-3xl font-bold text-gradient">{val}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{key}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="mt-6 flex items-center gap-3">
          <Badge variant={athlete.status === "Free Agent" ? "default" : "secondary"}>
            {athlete.status}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {athlete.weight} · Open to relocation
          </span>
        </div>

        {/* Placeholder sections */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-gradient-card p-5">
            <h2 className="mb-3 font-display text-lg font-bold">Highlight Videos</h2>
            <div className="flex items-center justify-center rounded-lg bg-secondary/50 py-12 text-sm text-muted-foreground">
              Sign in to upload highlights
            </div>
          </div>
          <div className="rounded-xl border border-border bg-gradient-card p-5">
            <h2 className="mb-3 font-display text-lg font-bold">Photo Gallery</h2>
            <div className="flex items-center justify-center rounded-lg bg-secondary/50 py-12 text-sm text-muted-foreground">
              Sign in to upload photos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
