import { Card } from "../Cards";
import { Container, ShowContent, SkillsContainer } from "./styled";
import { GrReactjs } from "react-icons/gr";
import {
  SiCss3,
  SiCssmodules,
  SiJavascript,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { RiHtml5Fill } from "react-icons/ri";
import { BsGit, BsGithub } from "react-icons/bs";

export const Skills = () => {
  return (
    <Container>
      <SkillsContainer>
        <Card title="React" img={<GrReactjs size={80} />} />
        <Card title="JavaScript" img={<SiJavascript size={80} />} />
        <Card title="TypeScript" img={<SiTypescript size={80} />} />
        <Card title="Html" img={<RiHtml5Fill size={80} />} />
        <Card title="CSS" img={<SiCss3 size={80} />} />
        <Card title="Git " img={<BsGit size={80} />} />
        <Card title="GitHub" img={<BsGithub size={80} />} />
        <Card title="CSS Modules" img={<SiCssmodules size={80} />} />
        <Card
          title="Styled Conponents"
          img={<SiStyledcomponents size={80} />}
        />
      </SkillsContainer>
      <ShowContent>
        <div className="center">Ainda em desenvolvimento</div>
      </ShowContent>
    </Container>
  );
};
