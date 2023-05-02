import { ProjectContainer } from "./styled"

export const ProjectPage = () => {
  return (
    <ProjectContainer>
      <div className="container">
        <div className="title">
          <h2>Name of project</h2>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore amet quisquam distinctio porro odit dicta mollitia similique doloremque ratione officiis. Placeat perferendis at consequuntur eaque, excepturi in est sunt itaque?
          </p>
        </div>

      </div>
      <div className="options">
        <div className="projects">
          <h2>Projects</h2>
        </div>
        <div className="optionsprojects">
          <h4>teste1</h4>
          <h4>teste2</h4>
          <h4>teste3</h4>
          <h4>teste4</h4>
          <h4>teste5</h4>
        </div>

      </div>
    </ProjectContainer>
  )
}