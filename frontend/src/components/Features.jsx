import {
  ShieldCheck,
  Zap,
  Globe,
  BadgeCheck,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Zap size={40} />,
      title: "Lightning Fast",
      text: "Process PDFs in seconds.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Privacy First",
      text: "Files deleted automatically.",
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "Completely Free",
      text: "No registration required.",
    },
    {
      icon: <Globe size={40} />,
      title: "Works Everywhere",
      text: "Desktop, Tablet and Mobile.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="mb-12 text-center text-4xl font-bold">
        Why Choose PDF Toolkit?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-5 flex justify-center text-blue-600">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-600">
              {item.text}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;