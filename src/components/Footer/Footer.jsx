import { LinkIcon } from "../index";

import "./Footer.scss";

const Footer = () => {
  return(
    <footer className="footer-bcontainer">
      <div className="footer-container">
        <div className="fc-links">
          <LinkIcon icon="logo-github" link="https://github.com/NahuelGenchi"/>
          <LinkIcon icon="logo-linkedin" link="https://www.linkedin.com/in/nahuel-genchi"/>
          <LinkIcon icon="mail-outline" link="mailto:nahuelgenchi@gmail.com"/>
        </div>
        <div className="fc-info">
          <div>© 2022 Nahuel Genchi</div>
          <div>Data received by <a href="https://randomuser.me/" target="_blank" rel="noreferrer">randomuser.me</a> API</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;