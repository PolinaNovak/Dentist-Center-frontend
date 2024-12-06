import "../css/ExpertsMenu.css";

export default function ExpertsMenu() {
  return (
    <section className="expertsMenuContainer container">
      <div className="expertsMenuBody">
        <div className="expertsMenuInfo">
          <h2 className="expertsMenuDopInfo orangeTitle">The allsmiles team</h2>
          <h1 className="expertsMenuTitle blueMediumTitle">Meet Our Experts</h1>
          <p className="expertsMenudescription mediumDescription">
            An delicata inimicus sea, vis equidem oporteat conclusion mundi et.
            Nec malis dolor fabellas ex, eu nec falli iuvaret. Per elitr
            eloquentiam an esse.
          </p>
        </div>

        <ul className="expertsMenuList">
          <li className="expertsMenuItem">
            <div className="expertsMenuItemImage">
              <img
                width="287"
                height="289"
                src="./images/black-man-doctor.png"
                alt="Estetic dentist"
                loading="lazy"
              />
            </div>

            <h2 className="expertsMenuItemName smallBlueText">Howard Holmes</h2>
            <h3 className="expertsMenuItemJob orangeTitle">Estetic dentist</h3>
          </li>

          <li className="expertsMenuItem">
            <div className="expertsMenuItemImage">
              <img
                width="287"
                height="289"
                src="./images/white-woman-doctor.png"
                alt="Dental technician"
                loading="lazy"
              />
            </div>

            <h2 className="expertsMenuItemName smallBlueText">Ella Thompson</h2>
            <h3 className="expertsMenuItemJob orangeTitle">
              Dental technician
            </h3>
          </li>

          <li className="expertsMenuItem">
            <div className="expertsMenuItemImage">
              <img
                width="287"
                height="289"
                src="./images/white-man-doctor.png"
                alt="Estetic dentist"
                loading="lazy"
              />
            </div>

            <h2 className="expertsMenuItemName smallBlueText">
              Vincent Cooper
            </h2>
            <h3 className="expertsMenuItemJob orangeTitle">Estetic dentist</h3>
          </li>

          <li className="expertsMenuItem">
            <div className="expertsMenuItemImage">
              <img
                width="287"
                height="289"
                src="./images/white-girl-doctor.png"
                alt="Dental technician"
                loading="lazy"
              />
            </div>

            <h2 className="expertsMenuItemName smallBlueText">
              Danielle Bryant
            </h2>
            <h3 className="expertsMenuItemJob orangeTitle">
              Dental technician
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
}
