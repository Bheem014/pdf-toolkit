import {
  ShieldCheck,
  Zap,
  Smartphone,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    title: "Secure Processing",
    description:
      "Your uploaded PDFs are processed securely and automatically removed after processing.",
    icon: ShieldCheck,
  },
  {
    title: "Lightning Fast",
    description:
      "Compress, merge and convert PDFs within seconds using our optimized backend.",
    icon: Zap,
  },
  {
    title: "Works Everywhere",
    description:
      "Use PDF Toolkit on desktop, tablet or mobile with a fully responsive interface.",
    icon: Smartphone,
  },
  {
    title: "Free to Use",
    description:
      "No registration required. Upload your files and start working immediately.",
    icon: BadgeDollarSign,
  },
];

function Features() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-14"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose PDF Toolkit?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Built for speed, privacy and simplicity.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

                  <Icon size={32} />

                </div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Features;