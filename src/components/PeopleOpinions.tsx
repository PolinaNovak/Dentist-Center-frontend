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
          <div className="PeopleOpinionsFeedbackBody">
            <div className="PeopleOpinionsInfo">
              <h2 className="PeopleOpinionsDopInfo orangeTitle">
                Our dear clients
              </h2>
              <h1 className="PeopleOpinionsTitle bigTitle">What People Say</h1>
              <p className="PeopleOpinionsDescription smallText">
                In sea viderer delicatissimi, urbanitas sententiae quo blandit
                maiorum euripidis.
              </p>
            </div>

            <ul className="PeopleOpinionsList containerSmall">
              <li className="PeopleOpinionsItem">
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
                  <p className="PeopleOpinionsItemDescription smallText">
                    Duis sed odio sit amet nibh vulputate cursus a sit am
                    mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od
                    tincidunt auctor.
                  </p>
                  <span className="PeopleOpinionsName orangeTitle">
                    Jenna Johnson
                  </span>
                </div>
              </li>

              <li className="PeopleOpinionsItem">
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
                  <p className="PeopleOpinionsItemDescription smallText">
                    Duis sed odio sit amet nibh vulputate cursus a sit am
                    mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od
                    tincidunt auctor.
                  </p>
                  <span className="PeopleOpinionsName orangeTitle">
                    Robert Logan
                  </span>
                </div>
              </li>

              <li className="PeopleOpinionsItem">
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
                  <p className="PeopleOpinionsItemDescription smallText">
                    Duis sed odio sit amet nibh vulputate cursus a sit am
                    mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od
                    tincidunt auctor.
                  </p>
                  <span className="PeopleOpinionsName orangeTitle">
                    August Johns
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="PeopleOpinionsPagination containerSmall">
            <ul className="PeopleOpinionsPaginationList">
              <li className="PeopleOpinionsPaginationItem">
                <button
                  className="PeopleOpinionsPaginationButton"
                  type="button"
                ></button>
              </li>
              <li className="PeopleOpinionsPaginationItem isCurrent">
                <button
                  className="PeopleOpinionsPaginationButton"
                  type="button"
                ></button>
              </li>
              <li className="PeopleOpinionsPaginationItem">
                <button
                  className="PeopleOpinionsPaginationButton"
                  type="button"
                ></button>
              </li>
            </ul>
          </div>
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
