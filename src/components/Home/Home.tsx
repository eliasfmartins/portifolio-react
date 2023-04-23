import { Link } from "react-router-dom";
import { HomeContainer } from "./styled";

export const Home = () => {
  return (
    <HomeContainer>
      <h2>Home</h2>
      <Link to={"page1"}>
        <button>Go to Page1</button>
      </Link>
      <Link to={"Page2"}>
        <button>Go to Page2</button>
      </Link>
    </HomeContainer>
  );
};
