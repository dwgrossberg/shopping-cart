import "./home.scss";
import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";

const home = (props) => {
  const { products } = props;

  return (
    <div className="home">
      <div className="title">
        <h2>the anything you want store</h2>
        <p>voted the #1 online retailer of 2023</p>
      </div>
      <div className="carousel">
        <Carousel loop hideArrow={true} autoplay={3000}>
          {products.map((item) => {
            return (
              <Carousel.Item className="carousel-item" key={item.id}>
                <img
                  className="carousel-img"
                  alt={item.title}
                  width="100%"
                  src={item.image}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <Link
        to="/products"
        className={"shop-now"}
        style={{ textDecoration: "none" }}
      >
        <div>shop now!</div>
      </Link>
    </div>
  );
};

export default home;
