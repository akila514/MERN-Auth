import { LucideLock } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-row py-2 px-5 bg-transparent text-sm justify-between font-medium z-50 bg-opacity-20">
      <nav className="flex flex-row space-x-4">
        <LucideLock className="w-5 h-5" />
        <Link to="" className="font-bold">
          MERN Auth
        </Link>
      </nav>
      <nav className="flex flex-row space-x-4">
        <Link to="">Login</Link>
        <Link to="">Signup</Link>
        <Link to="">About</Link>
      </nav>
    </header>
  );
};

export default Header;
