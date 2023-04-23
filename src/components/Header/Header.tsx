import { useContext } from "react";
import { globalContext } from "../../App";
import { Headerstyle, Nav, colorsHeader } from "./styledHeader";
import { Link } from "react-router-dom";

interface HeaderProps {
  colorHeader?: colorsHeader;
}

export const Header = ({ colorHeader = "dark" }: HeaderProps) => {
  const { color, setColor } = useContext(globalContext);
  return (
    <Headerstyle colorHeader={colorHeader}>
      <div>
        <h1>
          {"<&"} / Elias /{"&>"}
        </h1>
      </div>
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
        <li>
          <button onClick={() => setColor(!color)}>Change Color</button>
        </li>
      </Nav>
    </Headerstyle>
  );
};
