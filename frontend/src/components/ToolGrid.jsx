import {
  Minimize2,
  Combine,
  Scissors,
  FileOutput,
  ScanSearch,
  Lock,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    title: "Compress PDF",
    description: "Reduce PDF size while maintaining quality.",
    icon: Minimize2,
  },
  {
    title: "Merge PDF",
    description: "Combine multiple PDFs into one document.",
    icon: Combine,
  },
  {
    title: "Split PDF",
    description: "Extract pages or split large PDF files.",
    icon: Scissors,
  },
  {
    title: "Convert PDF",
    description: "Convert PDFs to Word, Image, Excel and more.",
    icon: FileOutput,
  },
  {
    title: "OCR PDF",
    description: "Extract searchable text from scanned PDFs.",
    icon: ScanSearch,
  },
  {
    title: "Protect PDF",
    description: "Encrypt your PDFs with password protection.",
    icon: Lock,
  },
];

function ToolGrid() {
  return (
    <section
      id="tools"
      className="mx-auto max-w-7xl px-6 py-12"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          PDF Tools
        </h2>

        <p className="mt-3 text-lg text-slate-600">
          Everything you need to work with PDF documents.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div
              key={tool.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={32} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {tool.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {tool.description}
              </p>

              <button className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">
                Open Tool
                <ArrowRight size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ToolGrid;