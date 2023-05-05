import { SkillsContainer } from "./styled"
import { FaBeer ,} from "@react-icons/all-files/fa/FaBeer";

export const Skills = () => {
  return(
    <SkillsContainer>
      <div>React <FaBeer/> </div>
      <div>JavaScript</div>
      <div>TypeScript</div>
      <div>Html & CSS</div>
      <div>Git & GitHub</div>
      <div>CSSModules & StyledConponents</div>
    </SkillsContainer>
  )
}