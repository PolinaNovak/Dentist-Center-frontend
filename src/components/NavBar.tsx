import "../css/NavBar.css";

export default function NavBar() {
  return (
    <section className="navBarContainer">
      <div className="navBarBody containerInner">
        <div className="navBarLogo">
          <img
            src="./icons/logo.png"
            width="135"
            height="17"
            alt="Logo"
            loading="lazy"
            className="navBarLogogImage"
          />
        </div>

        <div className="navBarMenu">
          <ul className="navBarMenuList">
            <li className="navBarMenuItem isCurrent">
              <a className="navBarMenuLink" href="/">
                Home
              </a>
            </li>
            <li className="navBarMenuItem">
              <a className="navBarMenuLink" href="/">
                Pages
              </a>
            </li>
            <li className="navBarMenuItem">
              <a className="navBarMenuLink" href="/">
                Staff
              </a>
            </li>
            <li className="navBarMenuItem">
              <a className="navBarMenuLink" href="/">
                Blog
              </a>
            </li>
            <li className="navBarMenuItem">
              <a className="navBarMenuLink" href="/">
                Shop
              </a>
            </li>
            <li className="navBarMenuItem">
              <a className="navBarMenuLink" href="/">
                Landing
              </a>
            </li>
          </ul>
        </div>

        <div className="navBarSearch">
          <button className="navBarSearchButton button" type="button">
            Search
          </button>
          <button
            className="navBarOptionButton"
            type="button"
            title="Open menu"
          >
            <span className="visuallyHidden">Open menu</span>
            <span className="navBarOptionButtonLine"></span>
            <span className="navBarOptionButtonLine"></span>
            <span className="navBarOptionButtonLine"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
