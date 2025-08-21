
import { useEffect, useRef, useState } from "react"
import { AuroraText } from "../../components/magicui/aurora-text"

type TitleProps = {
  prefix: string
  mainText: string
}

const Title = ({prefix, mainText}: TitleProps) => {
  const headingRef = useRef(null);

  return (
    <h1 className="flex items-baseline">
        <span className="text-3xl font-bold z-1 tracking-tighter md:text-4xl lg:text-6xl">
          {prefix}  
        </span>
        &nbsp;&nbsp;
              <AuroraText
                speed={1.5}
                ref={headingRef}
                className="ml-2 text-3xl font-bold tracking-tight transition-opacity duration-500 ease-in-out md:text-4xl lg:text-6xl"
              >
                {mainText}
              </AuroraText>
        </h1>
  )
}

export default Title