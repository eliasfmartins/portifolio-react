import {
  loadHomePage,
  loadFilmePage,
  loadLandingPage,
  loadAndroidPage,
  loadPortifolioPage,
} from "../reducer/actions";
import {
  home,
  landingPage,
  portifolio,
  siteAndroid,
  siteFilmes,
} from "../reducer/data";
import { CSSTransition } from "react-transition-group";
import { ProjectContainer } from "./styled";
import { ReduceContext } from "../reducer/context";
import { useContext, useState } from "react";

export const ProjectPage = () => {
  const reducerContext = useContext(ReduceContext);
  const { reducerState, reducerDispatch } = reducerContext;
  const [isEnter, setIsEnter] = useState(false);

  return (
    <ProjectContainer>
      <div className="content-container">
        <CSSTransition in={isEnter} timeout={300} classNames="animate">
          <div className="container">
            <div className="text">
              <h2>{reducerState.title}</h2>
              <p>{reducerState.body} </p>
            </div>
            <div className="links">
              <a
                className="linktwo"
                target="_blank"
                href={reducerState.links.linkOne}
                rel="noreferrer"
              >
                Site
              </a>
              <a
                className="linkone"
                target="_blank"
                href={reducerState.links.linkTwo}
                rel="noreferrer"
              >
                Projeto no GitHub
              </a>
            </div>
          </div>
        </CSSTransition>
      </div>
      <div className="options">
        <div className="projects">
          <h2>Projects</h2>
        </div>
        <div className="optionsprojects">
          <h4
            onClick={() => {
              reducerDispatch(loadHomePage());
              setIsEnter((v) => !v);
              console.log(isEnter);
            }}
            className={home.isOpen ? "obj actived" : "obj"}
          >
            {home.title}
          </h4>
          <h4
            onClick={() => {
              reducerDispatch(loadPortifolioPage());
              setIsEnter((v) => !v);
            }}
            className={portifolio.isOpen ? "obj actived" : "obj"}
          >
            {portifolio.title}
          </h4>
          <h4
            onClick={() => {
              reducerDispatch(loadFilmePage());
              setIsEnter((v) => !v);
            }}
            className={siteFilmes.isOpen ? "obj actived" : "obj"}
          >
            {siteFilmes.title}
          </h4>
          <h4
            onClick={() => {
              reducerDispatch(loadAndroidPage());
              setIsEnter((v) => !v);
            }}
            className={siteAndroid.isOpen ? "obj actived" : "obj"}
          >
            {siteAndroid.title}
          </h4>
          <h4
            onClick={() => {
              reducerDispatch(loadLandingPage());
              setIsEnter((v) => !v);
            }}
            className={landingPage.isOpen ? "obj actived" : "obj"}
          >
            {landingPage.title}
          </h4>
        </div>
      </div>
    </ProjectContainer>
  );
};
