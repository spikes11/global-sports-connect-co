import { Search, BadgeCheck, MapPin, Filter } from "lucide-react";
import { mockAthletes } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Athletes = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="font-display text-2xl font-bold">Discover Athletes</h1>
        <div className="flex gap-2">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, sport, position..."
              className="pl-10 bg-secondary border-border"
            />
          </div>
          <Button variant="outline" size="default">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Filter chips */}
      <div className="mb-6 flex flex-wrap gap-2">
        {["All Sports", "Soccer", "Basketball", "Volleyball", "Free Agents"].map((f) => (
          <Badge
            key={f}
            variant={f === "All Sports" ? "default" : "secondary"}
            className="cursor-pointer px-3 py-1.5 text-xs"
          >
            {f}
          </Badge>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockAthletes.map((athlete) => (
          <div
            key={athlete.id}
            className="group overflow-hidden rounded-xl border border-border bg-gradient-card shadow-card transition-all hover:border-primary/30 hover:shadow-glow"
          >
            <div className="flex items-center gap-4 p-5">
              <img
                src={athlete.avatar}
                alt={athlete.name}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="truncate font-semibold">{athlete.name}</h3>
                  {athlete.verified && <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />}
                </div>
                <p className="text-sm text-muted-foreground">
                  {athlete.sport} · {athlete.position}
                </p>
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {athlete.nationality}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px border-t border-border bg-border">
              {Object.entries(athlete.stats).map(([key, val]) => (
                <div key={key} className="bg-card p-3 text-center">
                  <div className="font-display text-lg font-bold text-primary">{val}</div>
                  <div className="text-xs capitalize text-muted-foreground">{key}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-4">
              <Badge variant={athlete.status === "Free Agent" ? "default" : "secondary"} className="text-xs">
                {athlete.status}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {athlete.age} yrs · {athlete.height}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Athletes;
