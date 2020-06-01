const Link = ReactRouterDOM.Link;

const Product = props => {
  const {
    id,
    name,
    url,
    sale,
    price,
    percent
  } = props.product;
  return /*#__PURE__*/React.createElement("div", {
    className: "product"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-img"
  }, /*#__PURE__*/React.createElement(Link, {
    to: url
  }, /*#__PURE__*/React.createElement("img", {
    src: `assets/img/product/${id} 200x200.png`,
    alt: name
  }))), /*#__PURE__*/React.createElement("div", {
    className: "product-info"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "product-name"
  }, /*#__PURE__*/React.createElement(Link, {
    to: url
  }, sale ? /*#__PURE__*/React.createElement("span", {
    className: "product-tag"
  }, "\u2212", percent, "%") : "", name)), /*#__PURE__*/React.createElement("p", {
    className: "product-price"
  }, sale ? sale.toLocaleString() : price.toLocaleString(), " \u0111", " "), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "add-to-cart"
  }, "Mua ngay")));
};

export default Product;