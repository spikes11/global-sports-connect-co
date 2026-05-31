import { Heart, MessageCircle, Share2, Bookmark, BadgeCheck } from "lucide-react";
import { mockFeedPosts } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

const Feed = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <h1 className="mb-6 font-display text-2xl font-bold">Your Feed</h1>

      <div className="space-y-6">
        {mockFeedPosts.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-xl border border-border bg-gradient-card shadow-card"
          >
            {/* Author header */}
            <div className="flex items-center gap-3 p-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/30"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm">{post.author.name}</span>
                  {post.author.verified && (
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground">
                  {post.author.sport} · {post.author.position} · {post.timestamp}
                </span>
              </div>
              {post.type === "recruitment" && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Recruitment
                </span>
              )}
            </div>

            {/* Content */}
            <div className="px-4 pb-3">
              <p className="text-sm leading-relaxed">{post.content}</p>
            </div>

            {/* Image */}
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="w-full object-cover"
                style={{ maxHeight: 400 }}
              />
            )}

            {/* Actions */}
            <div className="flex items-center justify-between border-t border-border px-4 py-3">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Heart className="h-5 w-5" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <MessageCircle className="h-5 w-5" />
                  {post.comments}
                </button>
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              <button className="text-muted-foreground transition-colors hover:text-primary">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Feed;
