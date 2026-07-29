import { Moon, FileText } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="rounded-xl bg-blue-600 p-2 text-white shadow-md">
            <FileText size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              PDF Toolkit
            </h1>
            <p className="text-xs text-slate-500">
              Fast • Secure • Free
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 font-medium text-slate-700 md:flex">
          <a href="#" className="transition hover:text-blue-600">
            Home
          </a>

          <a href="#tools" className="transition hover:text-blue-600">
            Tools
          </a>

          <a href="#about" className="transition hover:text-blue-600">
            About
          </a>

          <a href="#contact" className="transition hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <button
            className="rounded-xl border border-slate-300 p-2 transition hover:bg-slate-100"
            title="Dark Mode (Coming Soon)"
          >
            <Moon size={20} />
          </button>

          <button
            className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
          >
            Get Started
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;