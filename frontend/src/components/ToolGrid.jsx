import {
  Archive,
  Files,
  Scissors,
  RefreshCw,
  ScanSearch,
  Lock,
} from "lucide-react";

import ToolCard from "./ToolCard";

function ToolGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="mb-12 text-center text-4xl font-bold">
        PDF Tools
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        <ToolCard
          icon={<Archive size={50} />}
          title="Compress PDF"
          description="Reduce PDF size while maintaining quality."
        />

        <ToolCard
          icon={<Files size={50} />}
          title="Merge PDF"
          description="Combine multiple PDF files."
        />

        <ToolCard
          icon={<Scissors size={50} />}
          title="Split PDF"
          description="Split one PDF into multiple files."
        />

        <ToolCard
          icon={<RefreshCw size={50} />}
          title="Convert PDF"
          description="Convert PDF into other formats."
        />

        <ToolCard
          icon={<ScanSearch size={50} />}
          title="OCR PDF"
          description="Extract text from scanned PDFs."
        />

        <ToolCard
          icon={<Lock size={50} />}
          title="Protect PDF"
          description="Protect PDF with a password."
        />

      </div>

    </section>
  );
}

export default ToolGrid;