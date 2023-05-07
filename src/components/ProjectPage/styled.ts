import styled from "styled-components";

export const ProjectContainer = styled.div`
  flex-wrap: wrap;

  margin-top: 60px;
  z-index: 10;
  display: flex;
  height: 100%;
  align-items: center;

  justify-content: space-around;

  color: white;

  text-shadow: 1px 1px 2px black;

  div.container {
    border-radius: 8px;

    display: flex;

    flex-direction: column;

    width: 100%;

    height: 40%;

    display: flex;

    padding: 20px;

    border-top: solid 1px white;

    border-left: solid 1px white;

    justify-content: space-between;

    min-height: 300px;

    h2 {
      padding: 10px 0px;

      backdrop-filter: blur(5px);

      width: auto;

      display: inline-block;
    }
  }

  div.content-container {
    width: 50%;

    overflow: hidden;

    max-height: 500px;

    min-height: 300px;
  }

  div.options {
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

  .animate-container {
    width: 88vw;

    padding: 50px;
  }

  .animate {
    width: 88vw;

    transition: 0.5s;

    padding: 50px;
  }

  .animate-enter {
    opacity: 0;

    transform: translateX(-100%);
  }

  .animate-enter-active {
    opacity: 1;

    transform: translateX(0%);

    transition: all 500ms ease-in-out;
  }

  .animate-exit {
    opacity: 1;

    transform: translateX(0%);
  }

  .animate-exit-active {
    opacity: 0;

    transform: translateX(100%);

    transition: all 500ms ease-in-out;
  }

  div.links {
    position: relative;

    width: 100%;

    display: flex;

    justify-content: center;

    gap: 1rem;

    align-items: center;

    a.linkone {
      position: absolute;

      bottom: -20px;

      text-decoration: none;

      color: white;

      padding: 5px;

      border-bottom: 1px solid white;

      left: 120px;

      transition: 1s;

      backdrop-filter: blur(2px);
    }

    a.linkone:hover {
      padding: 15px 5px;
    }

    a.linktwo {
      position: absolute;

      bottom: -20px;

      left: 50px;

      text-decoration: none;

      color: white;

      padding: 5px;

      border-bottom: 1px solid white;

      transition: 1s;

      backdrop-filter: blur(2px);
    }

    a.linktwo:hover {
      padding: 15px 5px;
    }
  }

  p {
    backdrop-filter: blur(2px);
  }

  div.optionsprojects {
    display: flex;

    flex-direction: column;

    gap: 1rem;
  }

  .obj {
    padding: 5px;

    transition: 1s;

    width: auto;

    border-bottom: 1px solid transparent;

    display: inline-block;

    width: auto;
  }

  .obj:hover {
    transition: 1s;

    border-bottom: 1px solid white;

    width: auto;

    backdrop-filter: blur(5px);

    letter-spacing: 2px;
  }

  .actived {
    transition: 1s;

    border-bottom: 1px solid white;

    width: auto;

    backdrop-filter: blur(5px);

    letter-spacing: 2px;

    display: inline-block;
  }

  @media (max-width: 968px) {
    height: auto;

    gap: 2rem;

    padding: 25px;

    div.optionsprojects {
      gap: 1rem;

      width: 100%;

      padding: 10px;
    }

    div.container {
      transition: 0.8s;

      width: 88vw;

      max-width: none;
    }

    div.container.animate {
      width: 88vw;

      transition: 0.8s;

      color: red;

      padding: 50px;
    }

    div.options {
      width: 88vw;

      gap: 1rem;
    }
  }
`;
