import { Headerstyle, Nav, colorsHeader } from "./styledHeader";
import { Link } from "react-router-dom";

interface HeaderProps {
  colorHeader?: colorsHeader;
}

export const Header = ({ colorHeader = "dark" }: HeaderProps) => {
  return (
    <Headerstyle colorHeader={colorHeader}>
      <div>
        <h1>Header</h1>
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
      </Nav>
    </Headerstyle>
  );
};
