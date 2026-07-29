function ToolCard({ icon, title, description }) {
  return (
    <div
      className="
      cursor-pointer
      rounded-2xl
      bg-white
      p-8
      shadow-md
      transition-all
      duration-300
      hover:-translate-y-2
      hover:scale-105
      hover:shadow-2xl
      "
    >

      <div className="text-blue-600">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-600">
        {description}
      </p>

    </div>
  );
}

export default ToolCard;