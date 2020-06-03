const {
  useState,
  useEffect
} = React;
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const mq = MediaQuery.useMediaQuery;
import Header from "./components/header.js";
import Nav from "./components/nav.js";
import MobileNav from "./components/mobilenav.js";
import Home from "./home.js";
import Category from "./category.js";
import ProductDetails from "./productdetails.js";
import Post from "./post.js";
import Contact from "./contact.js";
import Search from "./search.js";
import Cart from "./components/cart.js";
import Test from "./test.js";

const App = props => {
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
  }); // Cart

  const [cart, addToCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  useEffect(() => {
    !openCart && cart.length > 0 ? setOpenCart(!openCart) : null;
  }, [cart]);

  const addProductToCart = product => {
    if (cart.map(i => i.product.id).includes(product.id)) {}
  };

  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Header, {
    cart: cart.length,
    setOpenCart: setOpenCart,
    openCart: openCart
  }), (md || lg || xl) && /*#__PURE__*/React.createElement(Nav, null), (xs || sm) && /*#__PURE__*/React.createElement(MobileNav, {
    setOpenCart: setOpenCart
  }), openCart && /*#__PURE__*/React.createElement(Cart, {
    cart: cart,
    setOpenCart: setOpenCart,
    remove: addToCart
  }), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/danh-cho-cho",
    children: /*#__PURE__*/React.createElement(Category, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/danh-cho-meo",
    children: /*#__PURE__*/React.createElement(Category, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/bai-viet",
    children: /*#__PURE__*/React.createElement(Post, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/lien-he",
    children: /*#__PURE__*/React.createElement(Contact, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/tim-kiem",
    children: /*#__PURE__*/React.createElement(Search, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/test",
    children: /*#__PURE__*/React.createElement(Test, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/san-pham/:url",
    children: /*#__PURE__*/React.createElement(ProductDetails, null)
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/",
    children: /*#__PURE__*/React.createElement(Home, {
      cart: cart,
      addToCart: addToCart
    })
  }), /*#__PURE__*/React.createElement(Router, {
    path: "*",
    children: /*#__PURE__*/React.createElement("p", null, "Opps! Page not found!")
  })));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("pety"));