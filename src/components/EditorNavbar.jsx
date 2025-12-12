import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function EditorNavbar() {
  return (
    <header className="h-14 w-full flex items-center justify-between px-4 bg-[#1e1e1e] border-b border-[#2a2a2a]">
      
      {/* Left: Logo */}
      <div className="flex items-center gap-2 text-white">
        <img src={Logo} alt="Logo" className="w-6 h-6" />
        <span className="text-sm font-medium">ImposterCode</span>
      </div>

      {/* Center: Editor actions */}
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 text-sm rounded bg-[#0e639c] hover:bg-[#1177bb] text-white transition">
          Run
        </button>
      </div>

      {/* Right: Navigation */}
      <div className="flex items-center gap-4 text-sm text-gray-300">
        <Link
          to="/"
          className="hover:text-white transition"
        >
          Home
        </Link>
      </div>

    </header>
  );
}
