import "./Rating.scss";

const Rating = (props) => {
  return (
    <div className="rating">
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <span
          className={"fa fa-star " + (props.rating.rate > 0 ? "checked" : "")}
        ></span>
        <span
          className={"fa fa-star " + (props.rating.rate > 1 ? "checked" : "")}
        ></span>
        <span
          className={"fa fa-star " + (props.rating.rate > 2 ? "checked" : "")}
        ></span>
        <span
          className={"fa fa-star " + (props.rating.rate > 3 ? "checked" : "")}
        ></span>
        <span
          className={"fa fa-star " + (props.rating.rate > 4 ? "checked" : "")}
        ></span>
      </div>
      <div className="rating-count">({props.rating.count})</div>
    </div>
  );
};

export default Rating;
