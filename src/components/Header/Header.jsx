import "./Header.scss";

const Header = () => {
  return(
    <header className="header">
      <div className="header-container">
        <h1>User Generator</h1>
        <p>This app uses an open-source API for generating random user data. Like Lorem Ipsum, but for people.</p>
      </div>
    </header>
  );
};

export default Header;