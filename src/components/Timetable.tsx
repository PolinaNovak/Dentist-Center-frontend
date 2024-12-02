import "../css/Timetable.css";

export default function Timetable() {
  return (
    <section className="timetableContainer">
      <div className="serviceCardsContainer containerSmall">
        <div className="serviceCard">
          <div className="cardImage">
            <img
              width="413"
              height="254"
              src="./images/card-image-1.png"
              alt="Dental treatment for children"
              loading="lazy"
            />
          </div>
          <h2 className="cardTitle">
            Pick the dentist that fits all your needs the best
          </h2>
          <div className="cardDescription">
            <p>
              Lorem ipsum dolor sit amet, eu duo ferri labor. Mea ex modo reque
              senserit, et sed hinc dolor, scaevola sum salutandi expetendis vix
              ne. Eros dicat his sum mel quod mundi consequat sum.
            </p>
          </div>
          <div className="serviceButton">
            <button className="cardButton  uppercase" type="button">
              Read more
            </button>
            <img
              width="35"
              height="35"
              src="./icons/button-icon.png"
              alt="Read more"
              loading="lazy"
            />
          </div>
        </div>

        <div className="serviceCard">
          <div className="cardImage">
            <img
              width="413"
              height="254"
              src="./images/card-image-2.png"
              alt="Specialist doctors"
              loading="lazy"
            />
          </div>
          <div className="cardDescription">
            <ul className="cardDescriptionList">
              <li className="cardDescriptionItem">
                Professional dental services 24/7
              </li>
              <li className="cardDescriptionItem">
                Oral hygiene advisory & assessment
              </li>
              <li className="cardDescriptionItem">
                Oral and maxillofacial surgery
              </li>
              <li className="cardDescriptionItem">
                Dental public health insurance
              </li>
              <li className="cardDescriptionItem">
                Free online appointment booking
              </li>
              <li className="cardDescriptionItem">
                Various cosmetic dentistry services
              </li>
              <li className="cardDescriptionItem">
                Special care dentistry services
              </li>
            </ul>
          </div>
          <button className="cardButton" type="button">
            Read more
          </button>
        </div>

        <div className="timetableCard">
          <h2 className="timetableTitle">Working Hours</h2>
          <div className="timetableTime">
            <ul className="timetableTimeList">
              <li className="timetableTimeItem">
                Monday <span className="itemDottedStroke">______</span>
                <time dateTime="8:00/19:00">8AM-7PM</time>
              </li>
              <li className="timetableTimeItem">
                Tuesday <span className="itemDottedStroke">______</span>
                <time dateTime="8:00/19:00">8AM-7PM</time>
              </li>
              <li className="timetableTimeItem">
                Wednesday <span className="itemDottedStroke">______</span>
                <time dateTime="8:00/19:00">8AM-7PM</time>
              </li>
              <li className="timetableTimeItem">
                Thursday <span className="itemDottedStroke">______</span>
                <time dateTime="8:00/19:00">8AM-7PM</time>
              </li>
              <li className="timetableTimeItem">
                Friday <span className="itemDottedStroke">______</span>
                <time dateTime="8:00/19:00">8AM-7PM</time>
              </li>
              <li className="timetableTimeItem">
                Saturday <span className="itemDottedStroke">______</span>
                <time dateTime="8:00/19:00">8AM-7PM</time>
              </li>
              <li className="timetableTimeItem">
                Sunday <span className="itemDottedStroke">______</span>
                <span className="uppercase">closed</span>
              </li>
            </ul>
          </div>
          <a className="tietableContacts" href="tel:+354/759-1675">
            Call Us: +354/759-1675
          </a>
        </div>
      </div>
    </section>
  );
}
