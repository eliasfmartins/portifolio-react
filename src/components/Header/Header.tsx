import { useContext } from "react";
import { globalContext } from "../../App";
import { Headerstyle, LinkStyled, Nav, colorsHeader } from "./styledHeader";
import { ButtonColor } from "../ButtonColor";
interface HeaderProps {
  colorHeader?: colorsHeader;
}
export const Header = ({ colorHeader = "light" }: HeaderProps) => {
  const { color, setColor } = useContext(globalContext);
  return (
    <Headerstyle colorHeader={colorHeader}>
      <div>
        <h1>Elias</h1>
      </div>
      <Nav>
        <li>
          <LinkStyled to="/">Home</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/page1">Page1</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/page2">Page2</LinkStyled>
        </li>
        <li>
          <ButtonColor isDark={false} onClick={() => setColor(!color)} />
        </li>
      </Nav>
    </Headerstyle>
  );
};

// import { useContext, useState } from "react";
// import { globalContext } from "../../App";
// import { Headerstyle, LinkStyled, Nav, colorsHeader } from "./styledHeader";
// import { ButtonColor } from "../ButtonColor";
// interface HeaderProps {
//   colorHeader?: colorsHeader;
// }
// export const Header = ({ colorHeader = "light" }: HeaderProps) => {
//   const { color, setColor } = useContext(globalContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     <Headerstyle colorHeader={colorHeader}>
//       <div>
//         <h1>Elias</h1>
//       </div>
//       <Nav className={menuOpen ? "open" : ""}>
//         <li>
//           <LinkStyled to="/" onClick={toggleMenu}>
//             Home
//           </LinkStyled>
//         </li>
//         <li>
//           <LinkStyled to="/page1" onClick={toggleMenu}>
//             Page1
//           </LinkStyled>
//         </li>
//         <li>
//           <LinkStyled to="/page2" onClick={toggleMenu}>
//             Page2
//           </LinkStyled>
//         </li>
//         <li>
//           <ButtonColor isDark={false} onClick={() => setColor(!color)} />
//         </li>
//       </Nav>
//     </Headerstyle>
//   );
// };
