const {
  useEffect,
  useState
} = React;
import Banner from "./components/banner.js";
import Service from "./components/service.js";
import Promo from "./components/promo.js";
import Category from "./components/category.js";
import Blog from "./components/blog.js";
import Email from "./components/email.js";
import Footer from "./components/footer.js";
const mq = MediaQuery.useMediaQuery;

const Home = props => {
  // Responsive
  const xs = mq({
    maxWidth: 599
  });
  const sm = mq({
    minWidth: 600,
    maxWidth: 799
  });
  const md = mq({
    minWidth: 800,
    maxWidth: 999
  });
  const lg = mq({
    minWidth: 1000,
    maxWidth: 1199
  });
  const xl = mq({
    minWidth: 1200
  }); // Data

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json").then(rs => rs.json()).then(rs => setProducts(rs));
  }, products);
  const sale = products.filter(({
    sale
  }) => sale);
  const dog = products.filter(({
    type
  }) => type === "danh-cho-cho");
  const cat = products.filter(({
    type
  }) => type === "danh-cho-meo");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Banner, null), (md || lg || xl) && /*#__PURE__*/React.createElement(Service, null), /*#__PURE__*/React.createElement(Promo, {
    cart: props.cart,
    addToCart: props.addToCart,
    products: sale
  }), /*#__PURE__*/React.createElement(Category, {
    cart: props.cart,
    addToCart: props.addToCart,
    url: "/danh-cho-cho",
    products: dog
  }), /*#__PURE__*/React.createElement(Category, {
    cart: props.cart,
    addToCart: props.addToCart,
    url: "/danh-cho-meo",
    products: cat
  }), /*#__PURE__*/React.createElement(Blog, null), /*#__PURE__*/React.createElement(Email, null), /*#__PURE__*/React.createElement(Footer, null));
};

export default Home;