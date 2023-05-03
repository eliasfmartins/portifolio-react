// import { useContext, useState } from "react"
// import { ProjectContainer } from "./styled"
// import { ReduceContext } from "../reducer/context"
// import { loadHomePage, loadFilmePage, loadLandingPage, loadAndroidPage, loadPortifolioPage } from "../reducer/actions"
// import { home, landingPage, portifolio, siteAndroid, siteFilmes } from "../reducer/data"
// import { TransitionGroup, CSSTransition } from "react-transition-group"




// export const ProjectPage = () => {
//   const reducerContext = useContext(ReduceContext);
//   const { reducerState, reducerDispatch } = reducerContext;

//   return (
//     <ProjectContainer>
//       <TransitionGroup>
//         <CSSTransition addEndListener={(node, done) => {}}>
//           <div className="container">

//             <div className="text">
//               <h2>{reducerState.title}</h2>
//               <p>
//                 {reducerState.body}
//               </p>
//             </div>
//             <div className="links">
//               <a className="linktwo" target="_blank" href={reducerState.links.linkOne}>Site</a>
//               <a className="linkone" target="_blank" href={reducerState.links.linkTwo}>Projeto no GitHub</a>
//             </div>

//           </div>
//         </CSSTransition>
//       </TransitionGroup>

//       <div className="options">
//         <div className="projects">
//           <h2>Projects</h2>
//         </div>
//         <div className="optionsprojects">
//           <h4 onClick={() => reducerDispatch(loadHomePage())}
//             className={home.isOpen ? 'obj actived' : 'obj'}>{home.title}</h4>
//           <h4 onClick={() => reducerDispatch(loadPortifolioPage())}
//             className={portifolio.isOpen ? 'obj actived' : 'obj'}>{portifolio.title}</h4>
//           <h4 onClick={() => reducerDispatch(loadFilmePage())}
//             className={siteFilmes.isOpen ? 'obj actived' : 'obj'}>{siteFilmes.title}</h4>
//           <h4 onClick={() => reducerDispatch(loadAndroidPage())}
//             className={siteAndroid.isOpen ? 'obj actived' : 'obj'}>{siteAndroid.title}</h4>
//           <h4 onClick={() => reducerDispatch(loadLandingPage())}
//             className={landingPage.isOpen ? 'obj actived' : 'obj'}>{landingPage.title}</h4>
//         </div>

//       </div>
//     </ProjectContainer>
//   )
// }
import { useContext } from "react"
import { ProjectContainer } from "./styled"
import { ReduceContext } from "../reducer/context"
import { loadHomePage, loadFilmePage, loadLandingPage, loadAndroidPage, loadPortifolioPage } from "../reducer/actions"
import { home, landingPage, portifolio, siteAndroid, siteFilmes } from "../reducer/data"
import { TransitionGroup, CSSTransition } from "react-transition-group"

export const ProjectPage = () => {
  const reducerContext = useContext(ReduceContext);
  const { reducerState, reducerDispatch } = reducerContext;

  return (
    <ProjectContainer>
      <TransitionGroup>
        <CSSTransition key={reducerState.title} timeout={1000} classNames="container mounted">
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
        </CSSTransition>
      </TransitionGroup>

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
