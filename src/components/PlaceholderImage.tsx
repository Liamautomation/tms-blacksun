import { ImageIcon } from "lucide-react";

export function PlaceholderImage({ label = "Image à venir", aspect = "video", className = "" }: { label?: string; aspect?: "video" | "square" | "portrait" | "wide"; className?: string }) {
  const aspects = { video: "aspect-video", square: "aspect-square", portrait: "aspect-[3/4]", wide: "aspect-[21/9]" };
  return (
    <div className={`relative overflow-hidden bg-card-tint border border-line rounded-xl flex items-center justify-center ${aspects[aspect]} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-warm/5" />
      <div className="relative flex flex-col items-center gap-2 text-ink-muted/40">
        <ImageIcon className="h-10 w-10" />
        <span className="text-xs font-medium">{label}</span>
      </div>
    </div>
  );
}
