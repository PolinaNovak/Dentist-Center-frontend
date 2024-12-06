import "../css/Discount.css";

export default function Discount() {
  return (
    <section className="discountContainer container">
      <div className="discountBody">
        <div className="discountInfo">
          <h2 className="discountTitle mediumTitle2">
            Discount dental plans save you
            <span className="discountHighlight"> up to 60%</span>
          </h2>
          <p className="discountDecription smallText">
            Sea te illum euismod, ex dicta noluisse qui, sea an hinc pericula
            imperdiet sum.
          </p>
        </div>

        <a href="/" className="discountButton orangeTitle">
          Learn more
        </a>
      </div>
    </section>
  );
}
