import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  type: "call" | "chat";
  enabled: boolean;
}

/**
 * Dynamic action button that toggles between call/chat variants and handling active states.
 */
export function ActionButton({ type, enabled }: Props) {
  const Icon = type === "call" ? Phone : MessageCircle;
  const label =
    type === "call"
      ? enabled
        ? "Call Now"
        : "Call Later"
      : enabled
        ? "Chat Now"
        : "Chat Later";

  return (
    <Button
      aria-label={`${type} ${enabled ? "advisor" : "advisor (unavailable)"}`}
      variant={enabled ? "default" : "secondary"}
      disabled={!enabled}
      className="w-28 cursor-pointer text-white"
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );
}
