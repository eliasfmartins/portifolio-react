import { Link } from "react-router-dom";
import { SkillsContainer } from "./style";

export const Page2 = () => {
  return (
    <SkillsContainer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              © 2023 Copyright:{" "}
              <a href="https://github.com/joshua1999">EliasFMartins</a>
            </p>
            <h2>
              <Link to={"/page1"}>
                <button> Ir para a page1</button>
              </Link>
              <Link to={"/"}>
                <button> Ir para o Home</button>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </SkillsContainer>
  );
};
