import { rainbowButtonVariants } from '../../components/magicui/rainbow-button'
import { cn } from '../../lib/utils'
import styles from './styles.module.css'


const SkillCard = ({src, name} : {src: string, name: string}) => {
  return (
 <div className={styles.parent}> 
    <div className={cn(rainbowButtonVariants({ variant: "default" }), styles["skill-card"])}>
      <div className={styles["content-box"]}>
        <img src={src} width={48} className={styles["see-more"]}/>
        <span className={styles["card-title"]}>{name}</span>
      </div>
    </div>
</div>

  )
}

export default SkillCard