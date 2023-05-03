import { useContext } from "react"
import { ProjectContainer } from "./styled"
import { ReduceContext } from "../reducer/context"
import { loadHomePage, loadFilmePage, loadLandingPage, loadAndroidPage, loadPortifolioPage } from "../reducer/actions"
import { home, landingPage, portifolio, siteAndroid, siteFilmes } from "../reducer/data"




export const ProjectPage = () => {
  const reducerContext = useContext(ReduceContext);
  const { reducerState, reducerDispatch } = reducerContext;
  
  return (
    <ProjectContainer>
      <div className="container">
        
        <div className="text">
          <h2>{reducerState.title}</h2>
          <p>
            {reducerState.body}
          </p>
        </div>
        <div className="links">
          <a className="linktwo" target="_blank" href={reducerState.links.linkOne}>Site</a>
          <a className="linkone" target="_blank" href={reducerState.links.linkTwo}>Projeto no GitHub</a>
        </div>

      </div>
      <div className="options">
        <div className="projects">
          <h2>Projects</h2>
        </div>
        <div className="optionsprojects">
          <h4 onClick={() => reducerDispatch(loadHomePage())}
            className={home.isOpen ? 'obj actived' : 'obj'}>{home.title}</h4>
          <h4 onClick={() => reducerDispatch(loadPortifolioPage())}
            className={portifolio.isOpen ? 'obj actived' : 'obj'}>{portifolio.title}</h4>
          <h4 onClick={() => reducerDispatch(loadFilmePage())}
            className={siteFilmes.isOpen ? 'obj actived' : 'obj'}>{siteFilmes.title}</h4>
          <h4 onClick={() => reducerDispatch(loadAndroidPage())}
            className={siteAndroid.isOpen ? 'obj actived' : 'obj'}>{siteAndroid.title}</h4>
          <h4 onClick={() => reducerDispatch(loadLandingPage())}
            className={landingPage.isOpen ? 'obj actived' : 'obj'}>{landingPage.title}</h4>
        </div>

      </div>
    </ProjectContainer>
  )
}