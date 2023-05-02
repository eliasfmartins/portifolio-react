import { useContext, useReducer } from "react"
import { ProjectContainer } from "./styled"
import { ReduceContext } from "../reducer/context"
import { loadFilmePage, loadLandingPage } from "../reducer/actions"




export const ProjectPage = () => {
  const reducerContext = useContext(ReduceContext);
  const { reducerState, reducerDispatch } = reducerContext;

  return (
    <ProjectContainer>
      <div className="container">
        <div className="title">
          <h2>{reducerState.title}</h2>
        </div>
        <div className="text">
          <p>
            {reducerState.body}
          </p>
        </div>
        <div>
          <a href={reducerState.links.linkOne}>site</a>
        </div>

      </div>
      <div className="options">
        <div className="projects">
          <h2>Projects</h2>
        </div>
        <div className="optionsprojects">
          <h4 onClick={() => reducerDispatch(loadLandingPage())}>teste1s</h4>
          <h4 onClick={() => reducerDispatch(loadFilmePage())}>teste2</h4>
          <h4>teste3</h4>
          <h4>teste4</h4>
          <h4>teste5</h4>
        </div>

      </div>
    </ProjectContainer>
  )
}