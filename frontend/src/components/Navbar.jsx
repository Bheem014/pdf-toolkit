import { FileText, Moon } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <FileText size={34} className="text-blue-600" />

          <h1 className="text-3xl font-extrabold text-blue-600">
            PDF Toolkit
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-slate-700">

          <li className="cursor-pointer transition hover:text-blue-600">
            Home
          </li>

          <li className="cursor-pointer transition hover:text-blue-600">
            Tools
          </li>

          <li className="cursor-pointer transition hover:text-blue-600">
            About
          </li>

          <li className="cursor-pointer transition hover:text-blue-600">
            Contact
          </li>

        </ul>

        <button className="rounded-full border p-3 transition hover:bg-slate-100">
          <Moon size={22} />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;