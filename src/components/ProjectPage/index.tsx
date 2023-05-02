import { useContext, useReducer } from "react"
import { ProjectContainer } from "./styled"
import { ReduceContext } from "../reducer/context"
import { loadFilmePage, loadLandingPage } from "../reducer/actions"
import { data2, data3, data4, data5 } from "../reducer/data"




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
          <h4 onClick={() => reducerDispatch(loadLandingPage())}>{reducerState.title}</h4>
          <h4 onClick={() => reducerDispatch(loadFilmePage())}>{data2.title}</h4>
          <h4 onClick={() => reducerDispatch(loadFilmePage())}>{data3.title}</h4>
          <h4 onClick={() => reducerDispatch(loadFilmePage())}>{data4.title}</h4>
          <h4 onClick={() => reducerDispatch(loadFilmePage())}>{data5.title}</h4>
        </div>

      </div>
    </ProjectContainer>
  )
}