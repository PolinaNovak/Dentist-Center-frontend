import "../css/ExpertsMenu.css";

export default function ExpertsMenu() {
  return (
    <section className="expertsMenuContainer container">
      <div className="expertsMenuBody">
        <div className="expertsMenuInfo">
          <h2 className="expertsMenuDopInfo">The allsmiles team</h2>
          <h1 className="expertsMenuTitle">Meet Our Experts</h1>
          <p className="expertsMenudescription">
            An delicata inimicus sea, vis equidem oporteat conclusion mundi et.
            Nec malis dolor fabellas ex, eu nec falli iuvaret. Per elitr
            eloquentiam an esse.
          </p>
        </div>

        <ul className="expertsMenuList">
          <li className="expertsMenuItem">
            <img
              className="expertsMenuItemImage"
              width="287"
              height="289"
              src="./images/black-man-doctor.png"
              alt="Estetic dentist"
              loading="lazy"
            />

            <h2 className="expertsMenuItemName">Howard Holmes</h2>
            <h3 className="expertsMenuItemJob">Estetic dentist</h3>
          </li>

          <li className="expertsMenuItem">
            <img
              className="expertsMenuItemImage"
              width="287"
              height="289"
              src="./images/white-woman-doctor.png"
              alt="Dental technician"
              loading="lazy"
            />

            <h2 className="expertsMenuItemName">Ella Thompson</h2>
            <h3 className="expertsMenuItemJob">Dental technician</h3>
          </li>

          <li className="expertsMenuItem">
            <img
              className="expertsMenuItemImage"
              width="287"
              height="289"
              src="./images/white-man-doctor.png"
              alt="Estetic dentist"
              loading="lazy"
            />

            <h2 className="expertsMenuItemName">Vincent Cooper</h2>
            <h3 className="expertsMenuItemJob">Estetic dentist</h3>
          </li>

          <li className="expertsMenuItem">
            <img
              className="expertsMenuItemImage"
              width="287"
              height="289"
              src="./images/white-girl-doctor.png"
              alt="Dental technician"
              loading="lazy"
            />

            <h2 className="expertsMenuItemName">Danielle Bryant</h2>
            <h3 className="expertsMenuItemJob">Dental technician</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}
