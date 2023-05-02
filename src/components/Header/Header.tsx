import { useContext, useState, useEffect } from "react";
import { Headerstyle, LinkStyled, Nav, colorsHeader } from "./styledHeader";
import { ButtonColor } from "../ButtonColor";
import { globalContext } from "../../App";
import classnames from "classnames";

interface HeaderProps {
  colorHeader?: colorsHeader;
  isActive:boolean;
}
export const Header = ({ colorHeader = "light" }: HeaderProps) => {
  const [isActive, setIsActive] = useState(false);
  const { color, setColor } = useContext(globalContext);

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    if (isActive) {
      bodyElement?.classList.add("menu-open");
    } else {
      bodyElement?.classList.remove("menu-open");
    }
  }, [isActive]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && isActive) {
        setIsActive(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive]);

  return (
    <Headerstyle colorHeader={colorHeader} isActive={isActive} >
      <div className="center">
      <div className={isActive ? "active" : ""}>
        <h1 className="logo">{'</'} Elias{'/>'}</h1>
      </div>
      <button
        className={`mobile ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <hr className="hr1" />
        <hr className="hr2" />
        <hr className="hr3" />
      </button>
      <Nav className={classnames({ active: isActive })}>
        <li>
          <LinkStyled to="/" onClick={() => setIsActive(false)}>
            Home
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/projectpage" onClick={() => setIsActive(false)}>
            Project Pages
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/skills" onClick={() => setIsActive(false)}>
          Skills
          </LinkStyled>
        </li>
        <li>
          <ButtonColor isDark={false} onClick={() => setColor(!color)} />
        </li>
      </Nav>
      </div>
    </Headerstyle>
  );
};
