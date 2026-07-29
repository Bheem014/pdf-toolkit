import { useRef, useState } from "react";
import { Upload, CheckCircle, FileText, HardDrive } from "lucide-react";
import api from "../services/api";

function UploadBox() {
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE = 20 * 1024 * 1024;

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const resetFile = () => {
    setSelectedFile(null);
    setFileName("");
    setFileSize("");
    setUploadSuccess(false);
  };

  const processFile = (file) => {
    setError("");
    setUploadStatus("");
    setUploadSuccess(false);

    if (!file) return;

    if (file.type !== "application/pdf") {
      resetFile();
      setError("Only PDF files are allowed.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      resetFile();
      setError("Maximum file size is 20 MB.");
      return;
    }

    if (file.size === 0) {
      resetFile();
      setError("Selected file is empty.");
      return;
    }

    setSelectedFile(file);
    setFileName(file.name);
    setFileSize((file.size / 1024 / 1024).toFixed(2) + " MB");
    setUploadProgress(0);
  };

  const handleFileChange = (e) => {
    processFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadStatus("");
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },

        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );

          setUploadProgress(percent);
        },
      });

      setUploadStatus(response.data.message);
      setUploadSuccess(true);
    } catch (err) {
      if (err.response) {
        setError("Server rejected the upload.");
      } else if (err.request) {
        setError("Cannot connect to the server.");
      } else {
        setError("Unexpected error occurred.");
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`rounded-3xl border-2 border-dashed p-16 text-center shadow-lg transition-all duration-300 ${
          isDragging
            ? "border-blue-600 bg-blue-50 scale-105"
            : "border-blue-400 bg-white hover:border-blue-600 hover:shadow-2xl"
        }`}
      >
        <Upload size={80} className="mx-auto text-blue-600" />

        <h2 className="mt-6 text-4xl font-bold">
          {isDragging ? "Drop PDF Here" : "Drag & Drop PDF Here"}
        </h2>

        <p className="mt-3 text-gray-500">
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
          className="mt-8 rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white hover:bg-blue-700"
        >
          Select PDF File
        </button>

        {error && (
          <div className="mt-6 rounded-xl bg-red-100 p-4 font-semibold text-red-700">
            ❌ {error}
          </div>
        )}

        {selectedFile && !uploadSuccess && (
          <div className="mx-auto mt-8 max-w-xl rounded-xl bg-slate-100 p-6 text-left">

            <p className="flex items-center gap-2">
              <FileText size={18} />
              <strong>{fileName}</strong>
            </p>

            <p className="mt-2 flex items-center gap-2">
              <HardDrive size={18} />
              {fileSize}
            </p>

            <button
              onClick={handleUpload}
              disabled={isUploading}
              className="mt-6 w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white hover:bg-green-700 disabled:bg-gray-400"
            >
              {isUploading ? "Uploading..." : "Upload PDF"}
            </button>

            {isUploading && (
              <div className="mt-6">
                <div className="h-3 w-full rounded-full bg-gray-300">
                  <div
                    className="h-3 rounded-full bg-blue-600"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>

                <p className="mt-2 text-center">
                  Uploading... {uploadProgress}%
                </p>
              </div>
            )}
          </div>
        )}

        {uploadSuccess && (
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border bg-green-50 p-8 text-center shadow">

            <CheckCircle
              size={64}
              className="mx-auto text-green-600"
            />

            <h3 className="mt-4 text-2xl font-bold text-green-700">
              Upload Successful
            </h3>

            <p className="mt-6">
              <strong>File:</strong> {fileName}
            </p>

            <p>
              <strong>Size:</strong> {fileSize}
            </p>

            <p className="mt-2 text-green-600">
              Ready for processing
            </p>

            <button
              className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Compress PDF
            </button>

          </div>
        )}
      </div>
    </section>
  );
}

export default UploadBox;