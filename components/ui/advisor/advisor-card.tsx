import { Advisor } from "@/types/advisor";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { ActionButton } from "./action-button";
import { Separator } from "../separator";

interface Props {
  advisor: Advisor;
}

/**
 * Displays an advisor's profile summary, pricing, and action buttons for calls or chats.
 *
 * @param {Props} props - The component properties.
 * @param {Object} props.advisor - The advisor data object containing profile and availability details.
 */
export function AdvisorCard({ advisor }: Props) {
  return (
    <>
      <article className="flex items-center justify-between py-6">
        {/* Lado izquierdo */}
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              role="img"
              alt={`${advisor.name} profile picture`}
              src={advisor.avatar}
            />
            <AvatarFallback aria-hidden="true">
              {advisor.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-semibold text-primary pb-6">{advisor.name}</h3>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="flex flex-col items-start gap-3">
          <span
            aria-label={`Price ${advisor.price} dollars per minute`}
            className="text-sm text-muted-foreground"
          >
            ${advisor.price}/min
          </span>

          <div
            role="group"
            aria-label={`Actions for ${advisor.name}`}
            className="flex flex-col items-end gap-2"
          >
            <ActionButton type="call" enabled={advisor.callAvailable} />

            <ActionButton type="chat" enabled={advisor.chatAvailable} />
          </div>
        </div>
      </article>

      <Separator />
    </>
  );
}
