import "../css/PeopleOpinions.css";

export default function PeopleOpinions() {
  return (
    <section className="PeopleOpinionsContainer container">
      <div className="PeopleOpinionsBody">
        <img
          className="PeopleOpinionsArrow"
          width="11"
          height="17"
          src="./icons/arrow-icon.png"
          alt="Scroll left"
          loading="lazy"
        />

        <div className="PeopleOpinionsFeedback">
          <div className="PeopleOpinionsInfo">
            <h2 className="PeopleOpinionsDopInfo">Our dear clients</h2>
            <h1 className="PeopleOpinionsTitle">What People Say</h1>
            <p className="PeopleOpinionsDescription">
              In sea viderer delicatissimi, urbanitas sententiae quo blandit
              maiorum euripidis.
            </p>
          </div>

          <li className="PeopleOpinionsList">
            <ul className="PeopleOpinionsItem">
              <img
                className="PeopleOpinionsImage"
                width="140"
                height="140"
                src="./images/smiling-woman-avatar.png"
                alt="Smiling woman"
                loading="lazy"
              />

              <div className="PeopleOpinionsItemInfo">
                <h3 className="PeopleOpinionsItemTitle">
                  Quick, easy & reliable
                </h3>
                <p className="PeopleOpinionsItemDescription">
                  Duis sed odio sit amet nibh vulputate cursus a sit am mauris.
                  Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt
                  auctor.
                </p>
                <span className="PeopleOpinionsName">Jenna Johnson</span>
              </div>
            </ul>

            <ul className="PeopleOpinionsItem">
              <img
                className="PeopleOpinionsImage"
                width="140"
                height="140"
                src="./images/man-glasses-avatar.png"
                alt="White man"
                loading="lazy"
              />

              <div className="PeopleOpinionsItemInfo">
                <h3 className="PeopleOpinionsItemTitle">
                  The best clinic in town
                </h3>
                <p className="PeopleOpinionsItemDescription">
                  Duis sed odio sit amet nibh vulputate cursus a sit am mauris.
                  Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt
                  auctor.
                </p>
                <span className="PeopleOpinionsName">Robert Logan</span>
              </div>
            </ul>

            <ul className="PeopleOpinionsItem">
              <img
                className="PeopleOpinionsImage"
                width="140"
                height="140"
                src="./images/black-man-avatar.png"
                alt="Black man"
                loading="lazy"
              />

              <div className="PeopleOpinionsItemInfo">
                <h3 className="PeopleOpinionsItemTitle">
                  The true professionals
                </h3>
                <p className="PeopleOpinionsItemDescription">
                  Duis sed odio sit amet nibh vulputate cursus a sit am mauris.
                  Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt
                  auctor.
                </p>
                <span className="PeopleOpinionsName">August Johns</span>
              </div>
            </ul>
          </li>

          <div className="PeopleOpinionsPagination"></div>
        </div>

        <img
          className="PeopleOpinionsArrow arrowRight"
          width="11"
          height="17"
          src="./icons/arrow-icon.png"
          alt="Scroll right"
          loading="lazy"
        />
      </div>
    </section>
  );
}
