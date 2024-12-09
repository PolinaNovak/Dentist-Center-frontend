import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footerContainer container">
      <div className="footerBody">
        <ul className="footerClinicsList">
          <li className="footerClinicsItem">
            <img
              className="footerClinicsItemImage"
              width="135"
              height="100"
              src="./icons/clinics/clinic-1.png"
              alt="Dental Beach"
              loading="lazy"
            />
          </li>

          <li className="footerClinicsItem">
            <img
              className="footerClinicsItemImage"
              width="135"
              height="100"
              src="./icons/clinics/clinic-2.png"
              alt="Teeth Fairy Clinic"
              loading="lazy"
            />
          </li>

          <li className="footerClinicsItem">
            <img
              className="footerClinicsItemImage"
              width="135"
              height="100"
              src="./icons/clinics/clinic-3.png"
              alt="Medident Dental"
              loading="lazy"
            />
          </li>

          <li className="footerClinicsItem">
            <img
              className="footerClinicsItemImage"
              width="135"
              height="100"
              src="./icons/clinics/clinic-4.png"
              alt="Smile Clinic"
              loading="lazy"
            />
          </li>

          <li className="footerClinicsItem">
            <img
              className="footerClinicsItemImage"
              width="135"
              height="100"
              src="./icons/clinics/clinic-5.png"
              alt="Teeth Clinic"
              loading="lazy"
            />
          </li>

          <li className="footerClinicsItem">
            <img
              className="footerClinicsItemImage"
              width="135"
              height="100"
              src="./icons/clinics/clinic-6.png"
              alt="Dentalcare Clinic"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
