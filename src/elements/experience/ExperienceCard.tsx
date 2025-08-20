import { Card } from "@/components/ui/card";

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <Card className="relative bg-gray-900/50 max-w-[640px] backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
      {/* Corner Borders */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pink-500 rounded-tl-2xl"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-400 rounded-tr-2xl"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-yellow-500 rounded-bl-2xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-pink-500 rounded-br-2xl"></div>

      {/* Content */}
      <div className="relative">
        <div className="absolute -top-12 left-0 px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-sm text-white">
          {exp.date}
        </div>
        <h2 className="text-3xl font-bold mb-2 text-white">{exp.title}</h2>
        <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500">
          {exp.subtitle}
        </h3>
        <p className="text-lg text-gray-300 mb-8">{exp.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8 text-gray-300">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 border border-gray-700 hover:border-yellow-500 hover:scale-110 transition-transform cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={exp.site}
            className="px-6 py-3 rounded-full bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 text-white"
          >
            Visit Site
          </a>
          <a
            href={exp.cert}
            className="px-6 py-3 rounded-full border border-gray-700 text-white hover:border-pink-500"
          >
            Certificate
          </a>
        </div>
      </div>
    </Card>
  );
}

export default ExperienceCard