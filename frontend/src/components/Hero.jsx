import UploadBox from "./UploadBox";
import { ShieldCheck, Zap, BadgeCheck } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">

      {/* Background Blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-cyan-200 opacity-30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

          🚀 Trusted PDF Toolkit

        </div>

        {/* Heading */}

        <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">

          Every PDF Tool

          <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

            You'll Ever Need

          </span>

        </h1>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-600">

          Compress, Merge, Split, Convert, Rotate and Edit PDFs in seconds.

          <br />

          Secure cloud processing. No registration required.

        </p>

        {/* Badges */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">

          <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow">

            <Zap className="text-yellow-500" size={20} />

            <span className="font-semibold">

              Fast Processing

            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow">

            <ShieldCheck className="text-green-600" size={20} />

            <span className="font-semibold">

              Secure Upload

            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow">

            <BadgeCheck className="text-blue-600" size={20} />

            <span className="font-semibold">

              Free to Use

            </span>

          </div>

        </div>

      </div>

      {/* Upload Box */}

      <div className="relative">

        <UploadBox />

      </div>

    </section>
  );
}

export default Hero;