import { HomeContainer } from "./styled"

export const Home2 = () => {
const currentDate = new Date();
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


  return (
    <HomeContainer>
      <div className="text">
        <h2>Front End Developer</h2>

        <h1>
          Welcome. <br />I am Elias
        </h1>
      </div>
      <div className="date">
          <div className="number">
              <h3>{currentDate.getDate()}</h3>
          </div>
          <div className="month">
              {months[currentDate.getMonth()]}
          </div>
      </div>
      <div className="text tx1">
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
     
    </HomeContainer >

  )
}