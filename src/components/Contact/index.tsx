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
          <BsWhatsapp size={40} /> (61) 98424-3799
        </h4>
        <h4>
          <IoMdMail size={40} /> ELIASMARTINSROCK84@GMAIL.COM
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
