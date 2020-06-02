const Link = ReactRouterDOM.Link;

const Product = props => {
  const {
    id,
    name,
    price,
    sale,
    percent
  } = props.product;
  return /*#__PURE__*/React.createElement("div", {
    className: "cart__product"
  }, /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: `assets/img/product/${id} 200x200.png`,
    alt: id
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "name"
  }, sale ? /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, `-${percent}%`) : "", name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "price"
  }, sale ? sale.toLocaleString() : price.toLocaleString(), " \u0111"), sale ? /*#__PURE__*/React.createElement("del", {
    className: "cost"
  }, price.toLocaleString(), " \u0111") : "")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => props.remove(id)
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/delete.svg",
    alt: ""
  })));
};

const Cart = props => {
  const removeProduct = id => {
    console.log(id);
    const products = props.cart.filter(p => p.id != id);
    props.remove(products);
  };

  const products = props.cart.map((product, index) => /*#__PURE__*/React.createElement(Product, {
    product: product,
    key: product.id,
    remove: removeProduct
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "cart__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart"
  }, /*#__PURE__*/React.createElement("img", {
    className: "close",
    src: "assets/img/close.svg",
    alt: "close",
    onClick: e => props.setOpenCart(false)
  }), /*#__PURE__*/React.createElement("h3", {
    className: "heading"
  }, "Gi\u1ECF h\xE0ng"), products.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "product__list"
  }, products) : /*#__PURE__*/React.createElement("p", null, "Kh\xF4ng c\xF3 s\u1EA3n ph\u1EA9m. Nh\u1EA5n n\xFAt MUA NGAY \u0111\u1EC3 th\xEAm s\u1EA3n ph\u1EA9m b\u1EA1n mu\u1ED1n mua v\xE0o gi\u1ECF h\xE0ng nh\xE9!"), props.cart.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "num"
  }, "T\u1ED5ng s\u1ED1 s\u1EA3n ph\u1EA9m: ", props.cart.length), /*#__PURE__*/React.createElement("p", {
    className: "bill"
  }, "T\u1ED5ng thanh to\xE1n:", " ", props.cart.map(product => product.sale ? product.sale : product.price).reduce((a, b) => a + b).toLocaleString(), " ", "\u0111"), /*#__PURE__*/React.createElement(Link, {
    to: "/thanh-toan",
    className: "button",
    onClick: e => props.setOpenCart(false)
  }, "Thanh to\xE1n ngay v\xE0 lu\xF4n")))));
};

export default Cart;