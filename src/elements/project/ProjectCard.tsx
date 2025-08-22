import { Card } from "../../components/ui/card"
import { View, Github } from "lucide-react";

type Card = {
  image: string;
  title: string;
  order: number;
  githubLink: string;
  deployLink: string;
  description: string;
};
export function ProjectCard({ card }:{ card: Card }  ) {
  

  return (

    <Card
    className="
      relative overflow-hidden rounded-[40px] shadow-md group py-0 h-fit
      hover:scale-105 hover:shadow-[0_20px_45px_-10px_rgba(7,185,255,0.22)]"> 
            <img src={card.image} alt="" className="w-[16rem] h-[16rem] object-cover max-xl:w-42 max-xl:h-42" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center"></div>
            <div className="absolute bottom-0 left-0 right-0 z-1 bg-white rounded-[40px] translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in-out">
              {/* Header */}
              <div className="flex items-center p-6 pb-3 bg-white rounded-tl-[40px] transition-transform group-hover:translate-y-0 -translate-y-full group-hover:translate-y-0 duration-200 ease-in-out relative">
                  <p className="text-xl font-bold text-[#6A515E]">
                    {card.title}
                  </p>
              </div>
              {/* Description */}
              <p className={`px-6 pb-3 text-blue-800 text-sm md:text-md line-clamp-3 `}  style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }} >{card.description}</p>
              <div className="pb-6 px-6 flex justify-center gap-2 ">
              <a className="flex flex-row border shadow-xs hover:text-accent-foreground bg-input/30 border-input hover:bg-input/50 rounded-xl p-4" href={card.githubLink}>
                <Github />  Github
              </a>
              <a className="flex flex-row border shadow-xs hover:text-accent-foreground bg-input/30 border-input hover:bg-input/50  text-nowrap rounded-xl p-4" href={card.deployLink}>
              <View/> Live Preview
              </a>
              
              </div>
            </div>
          </Card>
  )
}
