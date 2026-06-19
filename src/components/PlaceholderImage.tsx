import { ImageIcon } from "lucide-react";

export function PlaceholderImage({ label = "Image à venir", aspect = "video", className = "" }: { label?: string; aspect?: "video" | "square" | "portrait" | "wide"; className?: string }) {
  const aspects = { video: "aspect-video", square: "aspect-square", portrait: "aspect-[3/4]", wide: "aspect-[21/9]" };
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-black-card to-black-sun border border-black-border-light rounded-xl flex items-center justify-center ${aspects[aspect]} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gold/3 via-transparent to-warm/3" />
      <div className="relative flex flex-col items-center gap-2 text-cream-muted/25">
        <ImageIcon className="h-10 w-10" />
        <span className="text-xs font-medium">{label}</span>
      </div>
    </div>
  );
}