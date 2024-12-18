import "../css/Services.css";

export default function Services() {
  return (
    <section className="servicesContainer">
      <ul className="servicesList containerSmall">
        <li className="servicesListItem">
          <img
            className="servicesItemImage"
            width="97"
            height="96"
            src="./images/services/Root-Canal-Specialist.png"
            alt="Root Canal Specialist"
            loading="lazy"
          />
          <div className="servicesInfo">
            <h2 className="servicesTitle smallBlueText">
              Root Canal Specialist
            </h2>
            <p className="servicesDescription smallText">
              Vix nibh iudicabit necessitus et, quam inermis voluptatus.
            </p>
          </div>
        </li>

        <li className="servicesListItem">
          <img
            className="servicesItemImage"
            width="97"
            height="89"
            src="./images/services/Alignment-Specialist.png"
            alt="Root Canal Specialist"
            loading="lazy"
          />
          <div className="servicesInfo">
            <h2 className="servicesTitle smallBlueText">
              Alignment Specialist
            </h2>
            <p className="servicesDescription smallText">
              Vix nibh iudicabit necessitus et, quam inermis voluptatus.
            </p>
          </div>
        </li>

        <li className="servicesListItem">
          <img
            className="servicesItemImage"
            width="97"
            height="79"
            src="./images/services/Cosmetic-Dentistry.png"
            alt="Root Canal Specialist"
            loading="lazy"
          />
          <div className="servicesInfo">
            <h2 className="servicesTitle smallBlueText">Cosmetic Dentistry</h2>
            <p className="servicesDescription smallText">
              Vix nibh iudicabit necessitus et, quam inermis voluptatus.
            </p>
          </div>
        </li>

        <li className="servicesListItem">
          <img
            className="servicesItemImage"
            width="97"
            height="92"
            src="./images/services/Oral-Hygiene-Experts.png"
            alt="Root Canal Specialist"
            loading="lazy"
          />
          <div className="servicesInfo">
            <h2 className="servicesTitle smallBlueText">
              Oral Hygiene Experts
            </h2>
            <p className="servicesDescription smallText">
              Vix nibh iudicabit necessitus et, quam inermis voluptatus.
            </p>
          </div>
        </li>

        <li className="servicesListItem">
          <img
            className="servicesItemImage"
            width="97"
            height="94"
            src="./images/services/Live-Dental-Advisory.png"
            alt="Root Canal Specialist"
            loading="lazy"
          />
          <div className="servicesInfo">
            <h2 className="servicesTitle">Live Dental Advisory</h2>
            <p className="servicesDescription smallText">
              Vix nibh iudicabit necessitus et, quam inermis voluptatus.
            </p>
          </div>
        </li>

        <li className="servicesListItem">
          <img
            className="servicesItemImage"
            width="97"
            height="85"
            src="./images/services/Cavity-Inspection.png"
            alt="Root Canal Specialist"
            loading="lazy"
          />
          <div className="servicesInfo">
            <h2 className="servicesTitle">Cavity Inspection</h2>
            <p className="servicesDescription smallText">
              Vix nibh iudicabit necessitus et, quam inermis voluptatus.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
