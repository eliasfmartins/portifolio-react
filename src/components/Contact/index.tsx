import { ContactContainer } from "./styled";
import { BsWhatsapp } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

export const Contact = () => {
  return (
    <ContactContainer>
      <div className="contact">
        <h1>Contact</h1>
        <h2>@eliasf.martins</h2>
      </div>
      <div className="links">
        <h4>
          <BsWhatsapp size={40} /> <a href="https://wa.me/5561984243799">
            (61) 9 8424 - 3799
          </a>
        </h4>
        <h4>
          <IoMdMail size={40} />
          <a href="mailto:eliasmartinsrock84@gmail.com?subject=duvida a respeito do portifolio">
            eliasmartinsrock84@gmail.com
          </a>
        </h4>
        <h4>
          <BsGithub size={40} />
          <a href="https://github.com/EliasFMartins">
            https://github.com/EliasFMartins
          </a>
        </h4>
      </div>
    </ContactContainer>
  );
};
