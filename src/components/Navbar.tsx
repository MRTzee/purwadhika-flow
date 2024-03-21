import { Button } from "./ui/button";
import { MessagesSquare } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="flex cursor-pointer items-center gap-2 text-3xl font-bold text-white">
            <MessagesSquare />
            SOSMED
          </h1>
          <div className="flex gap-4">
            <Button>Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
