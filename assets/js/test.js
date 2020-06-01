const {
  useState,
  useEffect,
  useRef
} = React;
import Product from "./components/product.js";

const Test = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    $(".slide").slick({
      arrows: false,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2500
    });
  });
  useEffect(() => {
    fetch("products.json").then(rs => rs.json()).then(rs => setData(rs));
  }, []);
  const products = data.map(item => /*#__PURE__*/React.createElement(Product, {
    product: item,
    key: item.id
  }));
  return /*#__PURE__*/React.createElement("section", null, products.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "slide"
  }, products));
};

export default Test;