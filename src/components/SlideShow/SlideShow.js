const SlideShow = (props) => {
  const { products, item } = props;
  return (
    <div class="mySlides fade" key={item.id}>
      <div className="numbertext">
        {item.id} / {products.length}
      </div>
      <img src={item.image} alt={item.title} style={{ width: "100%" }}></img>
      <div class="text">Caption Text</div>
    </div>
  );
};

export default SlideShow;
