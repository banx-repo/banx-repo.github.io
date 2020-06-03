const {
  useState,
  useEffect
} = React;
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const mq = MediaQuery.useMediaQuery; // Components

import Header from "./components/header.js";
import Nav from "./components/nav.js";
import MobileNav from "./components/mobilenav.js";
import Email from "./components/email.js";
import Footer from "./components/footer.js"; // Pages

import Home from "./home.js";
import Dog from "./dog.js";
import Cat from "./cat.js";
import Post from "./post.js";
import Contact from "./contact.js";
import Search from "./search.js";
import Cart from "./components/cart.js";
import ProductDetails from "./product-details.js";
import PostDetails from "./post-details.js";

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
  const [numOfProductsInCart, setNumOfProductsInCart] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [totalReduced, setTotalReduced] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    !openCart && cart.length > 0 ? setOpenCart(!openCart) : null;
  }, [cart]);
  useEffect(() => {
    const num = cart.map(({
      amount
    }) => amount).reduce((a, b) => a + b, 0);
    const total = cart.map(({
      product,
      amount
    }) => (product.sale ? product.sale : product.price) * amount).reduce((a, b) => a + b, 0);
    const reduced = cart.map(({
      product,
      amount
    }) => (product.sale ? product.price - product.sale : 0) * amount).reduce((a, b) => a + b, 0);
    setNumOfProductsInCart(num);
    setTotalBill(total);
    setTotalReduced(reduced);
  }, [cart]);

  const addProductToCart = product => {
    // Kiểm tra xem sản phẩm có trong giỏ hàng hay chưa nè
    if (cart.length > 0 && cart.map(item => item.product.id).includes(product.id)) {
      const index = cart.findIndex(item => item.product.id === product.id);
      const prev = [].concat(cart);
      prev[index].amount++;
      addToCart(prev);
    } else {
      addToCart(cart.concat({
        product,
        amount: 1
      }));
    }
  };

  const removeProductFromCart = product => {
    addToCart(product);
  };

  const changeAmount = (index, action) => {
    const prev = [].concat(cart);

    if (action === "add") {
      prev[index].amount++;
    }

    if (action === "minus" && prev[index].amount > 1) {
      prev[index].amount--;
    }

    addToCart(prev);
  };

  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Header, {
    cart: cart.length,
    setOpenCart: setOpenCart,
    openCart: openCart
  }), (md || lg || xl) && /*#__PURE__*/React.createElement(Nav, null), (xs || sm) && /*#__PURE__*/React.createElement(MobileNav, {
    setOpenCart: setOpenCart,
    numOfProductsInCart: cart.length
  }), openCart && /*#__PURE__*/React.createElement(Cart, {
    cart: cart,
    numOfProductsInCart: numOfProductsInCart,
    totalBill: totalBill,
    totalReduced: totalReduced,
    openCart: openCart,
    msg: msg,
    setOpenCart: setOpenCart,
    remove: removeProductFromCart,
    changeAmount: changeAmount
  }), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/danh-cho-cho/:id",
    children: /*#__PURE__*/React.createElement(ProductDetails, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/danh-cho-cho",
    children: /*#__PURE__*/React.createElement(Dog, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/danh-cho-meo/:id",
    children: /*#__PURE__*/React.createElement(ProductDetails, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/danh-cho-meo",
    children: /*#__PURE__*/React.createElement(Cat, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/bai-viet/:id",
    children: /*#__PURE__*/React.createElement(PostDetails, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/bai-viet",
    children: /*#__PURE__*/React.createElement(Post, null)
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/lien-he",
    children: /*#__PURE__*/React.createElement(Contact, null)
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/tim-kiem",
    children: /*#__PURE__*/React.createElement(Search, null)
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/",
    children: /*#__PURE__*/React.createElement(Home, {
      cart: cart,
      addToCart: addProductToCart
    })
  }), /*#__PURE__*/React.createElement(Router, {
    path: "*",
    children: /*#__PURE__*/React.createElement("p", null, "Opps! Page not found!")
  })), /*#__PURE__*/React.createElement(Email, null), /*#__PURE__*/React.createElement(Footer, null));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("pety"));