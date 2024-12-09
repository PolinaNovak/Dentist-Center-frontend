import "../css/News.css";

export default function News() {
  return (
    <section className="newsContainer container">
      <div className="newsBody containerSmall">
        <div className="newsInfo">
          <h2 className="newsDopInfo orangeTitle">Dental practice</h2>
          <h1 className="newsTitle blueMediumTitle">Read Latest News</h1>
          <p className="newsDescription mediumDescription">
            In sea viderer delicatissimi, urbanitas sententiae quo blandit
            maiorum euripidis.
          </p>
        </div>

        <ul className="newsList">
          <li className="newsItem">
            <img
              className="newsItemImage"
              width="413"
              height="240"
              src="./images/news-item-1.png"
              alt="Patient and doctor"
              loading="lazy"
            />
            <h2 className="newsItemDopInfo orangeTitle">
              <time dateTime="2020-11-17">17th November 2020</time>, Pediatric
            </h2>
            <h1 className="newsItemTitle mediumTitle2">All about invisalign</h1>
            <p className="newsItemDescription smallText">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis sem nibh mel integre facilis.
            </p>

            <a href="/" className="newsItemButton uppercase" type="button">
              Read more
            </a>
          </li>

          <li className="newsItem">
            <img
              className="newsItemImage"
              width="413"
              height="240"
              src="./images/news-item-2.png"
              alt="Healthy smile"
              loading="lazy"
            />
            <h2 className="newsItemDopInfo orangeTitle">
              <time dateTime="2020-11-17">17th November 2020</time>, Pediatric
            </h2>
            <h1 className="newsItemTitle mediumTitle2">Braces for teens</h1>
            <p className="newsItemDescription smallText">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis sem nibh mel integre facilis.
            </p>

            <a href="/" className="newsItemButton uppercase" type="button">
              Read more
            </a>
          </li>

          <li className="newsItem">
            <img
              className="newsItemImage"
              width="413"
              height="240"
              src="./images/news-item-3.png"
              alt="Satisfied patient"
              loading="lazy"
            />
            <h2 className="newsItemDopInfo orangeTitle">
              <time dateTime="2020-11-17">17th November 2020</time>, Pediatric
            </h2>
            <h1 className="newsItemTitle mediumTitle2">Dental association</h1>
            <p className="newsItemDescription smallText">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis sem nibh mel integre facilis.
            </p>

            <a href="/" className="newsItemButton uppercase" type="button">
              Read more
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
