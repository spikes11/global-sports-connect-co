import { Search, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { mockAthletes } from "@/lib/mockData";

const conversations = mockAthletes.slice(0, 4).map((a, i) => ({
  ...a,
  lastMessage: [
    "Hey! Interested in discussing an opportunity...",
    "Thanks for the highlight reel, impressive stats!",
    "When are you available for a trial?",
    "Contract details attached. Let me know!",
  ][i],
  time: ["2m", "1h", "3h", "1d"][i],
  unread: i === 0,
}));

const Messages = () => {
  return (
    <div className="mx-auto flex h-[calc(100vh-8rem)] max-w-5xl flex-col px-4 py-6 md:flex-row md:gap-4">
      {/* Conversations list */}
      <div className="w-full shrink-0 overflow-y-auto rounded-xl border border-border bg-gradient-card md:w-80">
        <div className="border-b border-border p-4">
          <h2 className="mb-3 font-display text-lg font-bold">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-10 bg-secondary border-border" />
          </div>
        </div>
        <div className="divide-y divide-border">
          {conversations.map((c, i) => (
            <div
              key={c.id}
              className={`flex cursor-pointer items-center gap-3 p-4 transition-colors hover:bg-secondary/50 ${
                i === 0 ? "bg-secondary/30" : ""
              }`}
            >
              <img src={c.avatar} alt={c.name} className="h-10 w-10 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold truncate">{c.name}</span>
                  <span className="text-xs text-muted-foreground">{c.time}</span>
                </div>
                <p className="truncate text-xs text-muted-foreground">{c.lastMessage}</p>
              </div>
              {c.unread && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-border bg-gradient-card mt-4 md:mt-0">
        <div className="border-b border-border p-4">
          <div className="flex items-center gap-3">
            <img src={conversations[0].avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-semibold text-sm">{conversations[0].name}</span>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Sign in to start messaging
          </div>
        </div>
        <div className="border-t border-border p-4">
          <div className="flex gap-2">
            <Input placeholder="Type a message..." className="bg-secondary border-border" />
            <button className="rounded-lg bg-primary p-2.5 text-primary-foreground transition-colors hover:bg-primary/90">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
