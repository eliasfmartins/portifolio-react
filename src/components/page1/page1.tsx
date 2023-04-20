import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h2>Body</h2>
      <Link to={"/page2"}>
        <button> Ir para a page2</button>
      </Link>
      <Link to={"/"}>
        <button> Ir para o Home</button>
      </Link>
    </div>
  );
};
