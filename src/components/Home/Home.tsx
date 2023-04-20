import { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../../App";

export const Home = () => {
  const { color, setColor } = useContext(globalContext);

  return (
    <div>
      <h2>Home</h2>
      <Link to={"page1"}>
        <button>Go to Page1</button>
      </Link>
      <Link to={"Page2"}>
        <button>Go to Page2</button>
      </Link>
      <div>
        <button onClick={() => setColor(!color)}>change Color</button>
      </div>
    </div>
  );
};
