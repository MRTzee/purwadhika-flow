import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus2Icon } from "lucide-react";

const CardWhoToFollow: React.FC = () => {
  return (
    <div className="rounded-lg bg-yellow-200 p-4">
      <h2 className="font-bold">Who To Follow</h2>

      {/* CARD USER */}
      <div className="my-2 flex items-center justify-between rounded-md border border-gray-400 p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Muksal</p>
        </div>
        <UserPlus2Icon />
      </div>
      {/* END CARD USER */}
    </div>
  );
};

export default CardWhoToFollow;
