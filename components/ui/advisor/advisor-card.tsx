import { Advisor } from "@/types/advisor";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { ActionButton } from "./action-button";
import { Separator } from "../separator";

interface Props {
  advisor: Advisor;
}

export function AdvisorCard({ advisor }: Props) {
  return (
    <>
      <div className="flex items-center justify-between py-6">
        {/* Lado izquierdo */}
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={advisor.avatar} />
            <AvatarFallback>{advisor.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-semibold text-primary pb-6">{advisor.name}</h3>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-sm text-muted-foreground">${advisor.price}/min</p>

          <div className="flex flex-col items-end gap-2">
            <ActionButton type="call" enabled={advisor.callAvailable} />

            <ActionButton type="chat" enabled={advisor.chatAvailable} />
          </div>
        </div>
      </div>

      <Separator />
    </>
  );
}
