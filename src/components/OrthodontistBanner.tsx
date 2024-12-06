import "../css/OrthodontistBanner.css";

export default function OrthodontistBanner() {
  return (
    <section className="orthodontistBannerContainer container">
      <div className="orthodontistBannerBody">
        <div className="orthodontistBannerInfo">
          <h2 className="orthodontistBannerAddInfo orangeTitle">
            Dental practice
          </h2>
          <h1 className="orthodontistBannerTitle bigTitle">
            Fully dedicated to your dental health
          </h1>
          <p className="orthodontistBannerDescription">
            Te veritus tractatos delicatissimi qui, justo diceret mentitum ut
            sit. Qui sed reque dicam, qui veri nullam vituperatoribus in.
            Tibique maiestatis sum quod sum ut alienum nec et, summo possim
            persequeris vix mea. Adhuc quodsi qui, sit no tale essent electram.
            Mei sum prodesset in pro, quo scripta feugait vidisse.
          </p>
          <div className="orthodontistBannerSignature">Andrea McCollins</div>
        </div>
        <div className="orthodontistBannerVideoWrapper">
          <video
            className="orthodontistBannerVideo"
            src=""
            width="1017"
            height="705"
            poster="./images/video-wrapper-poster.png"
          ></video>

          <button className="orthodontistBannerButton"></button>
        </div>
      </div>
    </section>
  );
}
