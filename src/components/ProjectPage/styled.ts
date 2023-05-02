import styled from "styled-components";

export const ProjectContainer = styled.div`
  flex-wrap: wrap;
  margin-top: 60px;
  height:calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  text-shadow: 1px 1px 2px black;
  div.container {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    max-height: 500px;
    min-height: 300px;
    width: 50%;
    padding: 20px;
    border-top: solid 1px white;
    border-left: solid 1px white;
    justify-content: space-evenly;
    h2{
      padding: 10px  0px;
    }
  }
  div.options{
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: solid 1px white;
    border-left: solid 1px white;
    padding: 25px;
    max-height: 500px;
    min-height: 300px;
    width: 30%;
    
    
  }
  div.optionsprojects{
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
  }
  @media (max-width: 968px){
    height: auto;
    gap: 2rem;
    padding: 25px;
    div.optionsprojects{
    gap: 1rem;
    width: 100%;
    padding: 10px;
  }
  div.container{
    width:88vw;
    max-width: none;
  }
  div.options{
    width:88vw;
    gap: 1rem;
  }
  }
 
`;