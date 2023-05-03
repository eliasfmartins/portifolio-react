import { useContext } from "react"
import { ProjectContainer } from "./styled"
import { ReduceContext } from "../reducer/context"
import { loadHomePage, loadFilmePage, loadLandingPage, loadAndroidPage, loadPortifolioPage } from "../reducer/actions"
import { home, landingPage, portifolio, siteAndroid, siteFilmes } from "../reducer/data"
import classNames from "classnames"




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
          <h4 onClick={() => reducerDispatch(loadHomePage())}
            className={home.isOpen ? 'actived' : ''}>{home.title}</h4>
          <h4 onClick={() => reducerDispatch(loadPortifolioPage())}
            className={portifolio.isOpen ? 'actived' : ''}>{portifolio.title}</h4>
          <h4 onClick={() => reducerDispatch(loadFilmePage())}
            className={siteFilmes.isOpen ? 'actived' : ''}>{siteFilmes.title}</h4>
          <h4 onClick={() => reducerDispatch(loadAndroidPage())}
            className={siteAndroid.isOpen ? 'actived' : ''}>{siteAndroid.title}</h4>
          <h4 onClick={() => reducerDispatch(loadLandingPage())}
            className={landingPage.isOpen ? 'actived' : ''}>{landingPage.title}</h4>
        </div>

      </div>
    </ProjectContainer>
  )
}