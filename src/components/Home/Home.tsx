// import { Link } from "react-router-dom";
import { ButtonText } from "../ButtonText/ButtonText";
import { HomeContainer, HomeDysplayed } from "./styled";

export const Home = () => {
  return (
    <HomeContainer>
      <HomeDysplayed>
        <div>
          <h2>Front End Developer</h2>
          <h1>
            Welcome. <br />I am Elias
          </h1>
          <ButtonText textOfButton="More" />
        </div>
        <div>
          <p>
            Atualmente, sou estudante de Sistemas de Informação pela Estácio e
            já estou no quarto semestre. Sou apaixonado por tecnologia e estou
            sempre buscando aprender mais. Além de ser entusiasta de tecnologia,
            também sou dedicado e persistente. Atualmente aprendendo Node.js e
            React. Estou em busca de um estágio para aprimorar meus
            conhecimentos e ter a oportunidade de colocar em prática o que
            aprendi. Acredito que posso ser um grande contribuinte com minhas
            habilidades técnicas e paixão pela tecnologia
          </p>
        </div>
      </HomeDysplayed>
    </HomeContainer>
  );
};
//tbm vi aqui  da pra botar o nome em uma fonte grande e um subititle  web developer e tas abaixo
// pro theme dark ja tenho uma ideia  vou usar aquela parada pra fica escuro no inicio e no final
