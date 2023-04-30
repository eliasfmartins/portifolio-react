import styled from "styled-components";

export const HomeContainer = styled.div`

height:calc(100vh - 90px);
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
text-shadow: 1px 1px 2px black;
color: white;
flex-wrap: wrap;

div.text {
min-width: 350px;
color: white;
padding: 20px;
max-width: 500px;
font-family: 'Fira Sans', sans-serif;
}
div.text.fronte h2 {
  font-family: 'Goldman', cursive;
}
h2{
  font-size: 2.0rem;
  color: lightgray;
}
h1 {
  font-size: 5.1rem;
  font-weight: 700;
  font-family: 'Goldman', cursive;

}
p {
  font-size: 1.3rem;
}
div.date {
width: 200px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Goldman', cursive;
}
h3 {
  font-size: 5rem;
  font-family: 'Goldman', cursive;
  font-weight: 700;
}
@media (max-width: 900px){
  div.text{
    max-width: 100%;
  }
  div.text.tx1 {
    max-width: 650px;
  }
}
@media (max-width: 1250px){
  justify-content: center;
  flex-direction: column;

  height: auto;
  div.text{
    max-width: 100%;
    
  }
  div.text.tx1 {
    max-width: 650px;
  }
}
`;