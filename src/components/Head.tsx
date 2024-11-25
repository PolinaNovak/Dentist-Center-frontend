import "../css/Head.css";

export default function Head() {
  return (
    <section className="headContainer">
      <div className="headBody containerInner">
        <div className="headLeftSide">
          <span className="headTimetable smallText">
            <span className="quote">&#125;</span>
            Mon - Sat
            <time dateTime="8:00 17:30">&nbsp;8:00 17:30</time>, Sunday -
            <span className="uppercase">&nbsp;Closed</span>
          </span>
        </div>

        <div className="headRightSide">
          <ul className="headContactsList smallText">
            <li className="headContactsItem">
              <img
                className="phoneIcon"
                src="./icons/phone-icon.png"
                alt="Phone"
                width="17"
                height="17"
                loading="lazy"
              ></img>
              <a className="headContactsLink" href="tel:+654/4715-167">
                +654/4715-167
              </a>
            </li>
            <li className="headContactsItem mail">
              <a
                className="headContactsLink"
                href="mailto:allsmiles@qodeinteractive.com"
              >
                allsmiles@qodeinteractive.com
              </a>
            </li>
            <li className="headContactsItem location">
              <img
                className="addressIcon"
                src="./icons/address-icon.png"
                alt="Address"
                width="17"
                height="17"
                loading="lazy"
              ></img>
              <address className="headAddress">
                63 Wall St, New York, NY 10005
              </address>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
