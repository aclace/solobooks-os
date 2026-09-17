import { Topbar } from "@/components/layout/Topbar";
import { Card } from "@/components/ui/Card";
import { profile } from "@/lib/data";

export default function ProfilePage() {
  return (
    <>
      <Topbar title="Profile" />
      <div className="p-8">
        <Card className="flex items-center gap-6">
          <div
            className="h-20 w-20 shrink-0 rounded-full bg-border"
            aria-label="Avatar placeholder"
          />
          <div>
            <p className="text-lg font-semibold text-foreground">{profile.name}</p>
            <p className="text-sm text-muted">{profile.email}</p>
            <p className="mt-2 text-sm text-muted">
              {profile.bio || "No bio yet. Add one in lib/data.ts or wire this page up to your database."}
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}
