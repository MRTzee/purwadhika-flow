import { Button } from "@/components/ui/button";
import {
  BellIcon,
  HomeIcon,
  MessageSquareTextIcon,
  User2Icon,
} from "lucide-react";
import HeaderTweet from "./components/HeaderTweet";
import CardWhoToFollow from "./components/CardWhoToFollow";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <section className="grid grid-cols-5 pt-4">
        {/* SIDEBAR */}
        <div className="flex flex-col gap-4">
          <Button variant="ghost" className="justify-normal">
            <HomeIcon className="mr-2 h-4 w-4" /> Home
          </Button>
          <Button variant="ghost" className="justify-normal">
            <BellIcon className="mr-2 h-4 w-4" /> Notification
          </Button>
          <Button variant="ghost" className="justify-normal">
            <MessageSquareTextIcon className="mr-2 h-4 w-4" /> Message
          </Button>
          <Button variant="ghost" className="justify-normal">
            <User2Icon className="mr-2 h-4 w-4" /> Profile
          </Button>
        </div>
        {/* END SIDEBAR */}

        {/* TWEET LIST */}
        <div className="col-span-3 px-4">
          <HeaderTweet />
        </div>
        {/* END TWEET LIST */}

        {/* WHO TO FOLLOW */}
        <div>
          <CardWhoToFollow />
        </div>
        {/* END WHO TO FOLLOW */}
      </section>
    </main>
  );
}
