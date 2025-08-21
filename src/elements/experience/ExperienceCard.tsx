import { Card } from "../../components/ui/card";

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <Card
      className="
        relative
        bg-gray-900/50
        max-w-full sm:max-w-[640px]
        w-full
        backdrop-blur-xl
        rounded-2xl
        p-4 sm:p-6 lg:p-8
        border border-gray-800
        mx-auto
        "
    >
      {/* Timeline dot—responsive negative offsets */}
      <div
        className={`
          absolute top-0
          w-4 h-4 max-lg:hidden
          rounded-full border-4 border-blue-500 bg-gray-900
          ${exp.order%2 === 0
            ? ' -left-6 sm:-left-10'
            : ' -right-6 sm:-right-10'
          }
        `}
      />

      {/* Corner Borders—smaller on mobile */}
      <div className="absolute top-0 left-0 w-10 h-10 sm:w-20 sm:h-20 border-t-2 border-l-2 border-pink-500 rounded-tl-2xl pointer-events-none"/>
      <div className="absolute top-0 right-0 w-10 h-10 sm:w-20 sm:h-20 border-t-2 border-r-2 border-blue-400 rounded-tr-2xl pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-20 sm:h-20 border-b-2 border-l-2 border-blue-500 rounded-bl-2xl pointer-events-none"/>
      <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-20 sm:h-20 border-b-2 border-r-2 border-pink-500 rounded-br-2xl pointer-events-none"/>

      {/* Content */}
      <div className="relative">
        {/* Responsive badge */}
        <div className="absolute -top-10 left-0 px-4 py-2  bg-gradient-to-r from-pink-500 to-blue-500 rounded-full text-xs sm:text-sm text-white whitespace-nowrap">
          {exp.date}
        </div>
        <h2 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2 text-white">
          {exp.title}
        </h2>
        <h3 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-t from-pink-500 via-blue-400 to-blue-500">
          {exp.subtitle}
        </h3>
        <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-8">
          {exp.description}
        </p>

        {/* Tags—wrapping and spacing */}
        <div className="flex flex-wrap gap-2 mb-4 text-gray-300 text-sm">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-gray-700 hover:border-blue-500 hover:scale-110 transition-transform cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links—stack on mobile */}
          <a
            href={exp.site}
            className="px-4 py-2 flex flex-row w-fit rounded-full bg-gradient-to-t from-pink-500 via-blue-400 to-blue-500 text-white text-center"
          >
            Visit Site
          </a>
         
      </div>
    </Card>
  );
}

export default ExperienceCard;
