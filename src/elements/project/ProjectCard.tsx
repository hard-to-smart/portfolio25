import { Card, CardContent } from "@/components/ui/card"
import { View, Github } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

export function ProjectCard({card}) {
  

  return (

    <Card
    className="
      relative overflow-hidden rounded-[40px] shadow-md group py-0 h-fit
      hover:scale-105 hover:shadow-[0_20px_45px_-10px_rgba(7,185,255,0.22)]"> 
            <img src={card.image} alt="" className="w-full h-64 object-cover" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center"></div>
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-white rounded-[40px] translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in-out">
              {/* Header */}
              <div className="flex items-center p-6 pb-3 bg-white rounded-tl-[40px] transition-transform group-hover:translate-y-0 -translate-y-full group-hover:translate-y-0 duration-200 ease-in-out relative">
                  <p className="text-[1em] font-semibold text-[#6A515E]">
                    {card.title}
                  </p>
              </div>
              {/* Description */}
              <p className="px-6 pb-3 text-[#D7BDCA] text-sm font-light line-clamp-3">{card.description}</p>
              <div className="pb-6 px-6 flex justify-center gap-2 ">
              <Button variant="outline" size="sm" className="rounded-xl p-4" >
                <Github />  Github
              </Button>
              <Button variant="outline" size="sm" className="rounded-xl p-4">
              <View/> Live Preview
              </Button>
              
              </div>
            </div>
            {/* Overlay click area */}
            <a href="#" className="absolute inset-0 z-20"></a>
          </Card>
  )
}
