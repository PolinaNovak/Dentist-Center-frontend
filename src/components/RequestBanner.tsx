import "../css/RequestBanner.css";

export default function RequestBanner() {
  return (
    <section className="RequestBannerContainer container">
      <div className="requestBannerBody">
        <img
          className="requestBannerImage"
          width="1016"
          height="716"
          src="./images/request-banner.png"
          alt=""
          loading="lazy"
        />
        <div className="requestBannerInfo">
          <h2 className="requestBannerTitle blueMediumTitle">
            Request an Appointment
          </h2>
          <p className="requestBannerDescription">
            Proin gravida nibh vel velit auctor aliquet justo.
          </p>

          <div className="requestBannerForm">
            <label className="visuallyHidden" htmlFor="firstName">
              First Name
            </label>
            <input
              className="requestBannerFormInput smallText"
              id="firstName"
              placeholder="First Name"
            ></input>

            <label className="visuallyHidden" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="requestBannerFormInput smallText"
              id="lastName"
              placeholder="Last Name"
            ></input>

            <label className="visuallyHidden" htmlFor="email">
              E-Mail Address
            </label>
            <input
              className="requestBannerFormInput smallText"
              id="email"
              placeholder="E-Mail Address"
            ></input>

            <label className="visuallyHidden" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="requestBannerFormInput smallText"
              id="phone"
              placeholder="Phone Number"
            ></input>

            <label className="visuallyHidden" htmlFor="comment"></label>
            <textarea
              className="requestBannerFormInput wide smallText"
              id="comment"
            ></textarea>
          </div>

          <button className="requestBannerButton orangeTitle" type="submit">
            Send Request
          </button>
        </div>
      </div>
    </section>
  );
}
