import { useRef, useState } from "react";
import { Upload } from "lucide-react";

function UploadBox() {
  const fileInputRef = useRef(null);

  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }

    setFileName(file.name);
    setFileSize((file.size / 1024 / 1024).toFixed(2) + " MB");
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl border-2 border-dashed border-blue-400 bg-white p-16 text-center shadow-lg transition hover:border-blue-600 hover:shadow-2xl">

        <div className="text-blue-600">
          <Upload size={80} className="mx-auto" />
        </div>

        <h2 className="mt-6 text-4xl font-bold">
          Drag & Drop PDF Here
        </h2>

        <p className="mt-3 text-slate-500">
          or choose a PDF from your computer
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />

        <button
          onClick={() => fileInputRef.current.click()}
          className="mt-8 rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
        >
          Select PDF File
        </button>

        {fileName && (
          <div className="mx-auto mt-8 max-w-xl rounded-xl bg-slate-100 p-6 text-left">

            <p className="mb-2">
              <strong>📄 File:</strong> {fileName}
            </p>

            <p className="mb-2">
              <strong>📦 Size:</strong> {fileSize}
            </p>

            <p className="mb-6 font-semibold text-green-600">
              ✔ PDF Validated Successfully
            </p>

            <button
              className="w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              Upload PDF
            </button>

          </div>
        )}

      </div>
    </section>
  );
}

export default UploadBox;