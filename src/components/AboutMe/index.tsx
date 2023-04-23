import { Link } from "react-router-dom";
import { AboutContainer } from "./style";

export const AboutMe = () => {
  return (
    <AboutContainer>
      <h2>About Me </h2>

      <p>
        Atualmente, sou estudante de Sistemas de Informação pela Estácio e já
        estou no quarto semestre. Sou apaixonado por tecnologia e estou sempre
        buscando aprender mais. Além de ser entusiasta de tecnologia, também sou
        dedicado e persistente. atualmente aprendendo Node.js Estou em busca de
        um estágio para aprimorar meus conhecimentos e ter a oportunidade de
        colocar em prática o que aprendi. Acredito que posso ser um grande
        contribuinte para qualquer empresa com minhas habilidades técnicas e
        paixão pela tecnologia
      </p>
      <Link to={"/page2"}>
        <button> Ir para a page2</button>
      </Link>
      <Link to={"/"}>
        <button> Ir para o Home</button>
      </Link>
    </AboutContainer>
  );
};
