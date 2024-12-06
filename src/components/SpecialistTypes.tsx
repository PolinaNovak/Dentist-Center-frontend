import "../css/SpecialistTypes.css";

export default function SpecialistTypes() {
  return (
    <section className="specialistTypesContainer container">
      <div className="specialistTypesBody containerSmall">
        <ul className="specialistTypesList">
          <li className="specialistTypesItem smallBlueText isCurrent">
            Root Canal Specialist
          </li>

          <li className="specialistTypesItem smallBlueText">
            Alignment Specialist
          </li>

          <li className="specialistTypesItem smallBlueText">
            Cosmetica Dentistry
          </li>

          <li className="specialistTypesItem smallBlueText">
            Live Dental Advisory
          </li>
        </ul>

        <div className="specialistTypesMainInfo">
          <div className="specialistTypesInfo">
            <h2 className="specialistTypesTitle mediumTitle2">
              Fast & professional treatments for every patient
            </h2>
            <p className="specialistTypesDescriptionMain">
              Proin gravida nibh vel velit auctor aliquet ent. Est vel sum
              sollicitudin, lorem ad quismi bibe nd mi auctor.
            </p>
            <p className="specialistTypesDescriptionAdd smallText">
              Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi
              accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a
              ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix.
              Solum persius voluptaria ad nostro quis odio scriptorem ex vim.
            </p>
          </div>

          <img
            className="specialistTypesImage"
            width="533"
            height="366"
            src="./images/specialist-image.png"
            alt="Root Canal Specialist"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
