import SkillCard from "./SkillCard";
import { data } from "./data";


export function Skills() {
  return (
    <div className="flex flex-row gap-4 justify-center items-center bg-transparent my-20 flex-wrap">
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
