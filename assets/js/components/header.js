const {
  useState
} = React;
const mq = MediaQuery.useMediaQuery;
const Link = ReactRouterDOM.Link;
const useHistory = ReactRouterDOM.useHistory;

const SearchForm = props => {
  const [product, setProduct] = useState("");
  const history = useHistory();

  const search = e => {
    setProduct(product.trim());
    console.log(product);

    if (product.length > 0) {
      history.push(`/tim-kiem?&san-pham=${product}`);
    } else {
      e.preventDefault();
    }
  };

  return /*#__PURE__*/React.createElement("form", {
    action: "",
    className: "app-search",
    onSubmit: e => search(e)
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "san-pham",
    id: "text",
    size: "10",
    placeholder: "B\u1EA1n mu\u1ED1n t\xECm g\xEC?",
    value: product,
    onChange: e => setProduct(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: "search-button",
    type: "submit"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/search.svg",
    alt: ""
  })));
};

const Cart = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "app-cart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/bag.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "0")), /*#__PURE__*/React.createElement("p", null, "Gi\u1ECF h\xE0ng"));
};

const Header = props => {
  const xs = mq({
    maxWidth: 599
  });
  const sm = mq({
    minWidth: 600,
    maxWidth: 799
  });
  return /*#__PURE__*/React.createElement("header", {
    className: "app-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Link, {
    className: "app-logo",
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/img/logo.png",
    alt: "Pety - Si\xEAu th\u1ECB th\xFA c\u01B0ng"
  })), /*#__PURE__*/React.createElement(SearchForm, null), !(xs || sm) && /*#__PURE__*/React.createElement(Cart, null)));
};

export default Header;