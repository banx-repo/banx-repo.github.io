const {
  useState,
  useEffect,
  Suspense,
  lazy
} = React;
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const mq = MediaQuery.useMediaQuery;

const App = props => {
  // Load Components, Pages
  const Header = lazy(() => import("./components/header.js"));
  const Nav = lazy(() => import("./components/nav.js"));
  const MobileNav = lazy(() => import("./components/mobilenav.js"));
  const Home = lazy(() => import("./home.js"));
  const Category = lazy(() => import("./category.js"));
  const Post = lazy(() => import("./post.js"));
  const Contact = lazy(() => import("./contact.js"));
  const Search = lazy(() => import("./search.js"));
  const Test = lazy(() => import("./test.js")); // Responsive

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
  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }
    }, "\u0110ang t\u1EA3i, \u0111\u1EE3i x\xEDu nha!!!")
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Header, null), (md || lg || xl) && /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
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
    exact: true,
    path: "/",
    children: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Router, {
    path: "*",
    children: /*#__PURE__*/React.createElement("p", null, "Opps! Page not found!")
  })), (xs || sm) && /*#__PURE__*/React.createElement(MobileNav, null)));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("pety"));