// import { Link } from "react-router-dom";
import { useContext } from "react";
import { globalContext } from "../../App";
import { ButtonText } from "../ButtonText/ButtonText";
import { HomeContainer, HomeDysplayed } from "./styled";

export const Home = () => {
  const { color, setColor } = useContext(globalContext);
  return (
    <HomeContainer className={color ?'darkmode':''}>
      <HomeDysplayed>
        <div>
          <h2>Front End Developer</h2>
          <h1>
            Welcome. <br />I am Elias
          </h1>
          <ButtonText textOfButton="CONTACT ME" />
        </div>
        <div>
          <p>
            Currently, I am a Systems Information student at Estácio University
            and I am already in my fourth semester. I am passionate about
            technology and always looking to learn more. In addition to being a
            technology enthusiast, I am also dedicated and persistent.
            Currently, I am learning Node.js and React. I am looking for an
            internship to improve my knowledge and have the opportunity to put
            into practice what I have learned. I believe that I can be a great
            contributor with my technical skills and passion for technology.
          </p>
        </div>
      </HomeDysplayed>
    </HomeContainer>
  );
};
//tbm vi aqui  da pra botar o nome em uma fonte grande e um subititle  web developer e tas abaixo
// pro theme dark ja tenho uma ideia  vou usar aquela parada pra fica escuro no inicio e no final
