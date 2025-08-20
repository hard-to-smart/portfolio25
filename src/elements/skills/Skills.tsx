import SkillCard from "./SkillCard";
import { data } from "./data";


export function Skills() {
  return (
    <div className="flex flex-row gap-10 justify-center items-center bg-transparent my-20 flex-wrap px-10">
        {
            data.map((el)=> {
                return (
                <SkillCard  {...el} />
                )
            })
        }
    </div>
  );
}
