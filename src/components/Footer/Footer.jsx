import "./Footer.scss";

const Footer = () => {
  return(
    <footer className="footer-bcontainer">
      <div className="footer-container">
        <div className="fc-links">

        </div>
        <div className="fc-info">
          <div>© 2022 Nahuel Genchi</div>
          <div>Data received by <a href="https://randomuser.me/">randomuser.me API</a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;