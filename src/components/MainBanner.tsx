import "../css/MainBanner.css";

export default function MainBanner() {
  return (
    <section className="mainBannerContainer">
      <div className="mainBannerBody">
        <div className="mainBannerArrow">
          <img
            className="arrowLeft"
            src="./icons/arrow-icon.png"
            width="25"
            height="47"
            alt="Scroll left"
            loading="lazy"
          />
        </div>

        <div className="mainBannerInfoBlock">
          <h2 className="mainBannerInfo uppercase mediumTitle">
            Dental practice
          </h2>
          <h1 className="mainBannerTitle bigTitle">
            We provide the best <br />
            services out there
          </h1>
          <div className="mainBannerButtons">
            <a className="mainBannerViewButton button" type="button" href="/">
              View more
            </a>
            <a
              className="mainBannerPurchaseButton button"
              type="button"
              href="/"
            >
              Purchase
            </a>
          </div>
        </div>

        <div className="mainBannerArrow">
          <img
            className="arrowRight"
            src="./icons/arrow-icon.png"
            width="25"
            height="47"
            alt="Scroll left"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mainBannerPagination">
        <ul className="mainBannerPaginationList">
          <li className="mainBannerPaginationItem">
            <button
              className="mainBannerPaginationButton"
              type="button"
            ></button>
          </li>
          <li className="mainBannerPaginationItem">
            <button
              className="mainBannerPaginationButton"
              type="button"
            ></button>
          </li>
          <li className="mainBannerPaginationItem isCurrent">
            <button
              className="mainBannerPaginationButton"
              type="button"
            ></button>
          </li>
          <li className="mainBannerPaginationItem">
            <button
              className="mainBannerPaginationButton"
              type="button"
            ></button>
          </li>
        </ul>
      </div>
    </section>
  );
}
