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
min-width: 450px;
color: white;
padding: 20px;
max-width: 500px;

}
h2{
  font-size: 2.5rem;
}
h1 {
  font-size: 6rem;
}
p {
  font-size: 1.3rem;
}
div.date {
width: 200px;
display: flex;
align-items: center;
justify-content: center;
}
h3 {
  font-size: 5rem;
}
@media (max-width: 900px){
  div.text{
    max-width: 100%;
  }
  div.text.tx1 {
    max-width: 650px;
  }
  
}
@media (max-width: 1200px){
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
@media (max-width: 500px){

}
`;