import { Search, MapPin, Clock, Home, Plane, Filter, Briefcase } from "lucide-react";
import { mockJobs } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Jobs = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Opportunities</h1>
          <p className="text-sm text-muted-foreground">
            {mockJobs.length} open positions worldwide
          </p>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search opportunities..."
              className="pl-10 bg-secondary border-border"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {mockJobs.map((job) => (
          <div
            key={job.id}
            className="group overflow-hidden rounded-xl border border-border bg-gradient-card shadow-card transition-all hover:border-primary/30 hover:shadow-glow"
          >
            <div className="p-5">
              <div className="flex items-start gap-4">
                <img
                  src={job.logo}
                  alt={job.team}
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{job.position}</h3>
                      <p className="text-sm text-muted-foreground">{job.team}</p>
                    </div>
                    <Button variant="hero" size="sm">Apply</Button>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="gap-1 text-xs">
                      <Briefcase className="h-3 w-3" /> {job.sport}
                    </Badge>
                    <Badge variant="secondary" className="gap-1 text-xs">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </Badge>
                    <Badge variant="secondary" className="gap-1 text-xs">
                      <Clock className="h-3 w-3" /> {job.contractLength}
                    </Badge>
                    {job.housing && (
                      <Badge variant="secondary" className="gap-1 text-xs">
                        <Home className="h-3 w-3" /> Housing
                      </Badge>
                    )}
                    {job.visa && (
                      <Badge variant="secondary" className="gap-1 text-xs">
                        <Plane className="h-3 w-3" /> Visa Sponsor
                      </Badge>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{job.salary}</span>
                    <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
