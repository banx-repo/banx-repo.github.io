const Link = ReactRouterDOM.Link;
const {
  useState,
  useEffect
} = React;

const Product = props => {
  const {
    id,
    name,
    price,
    sale,
    percent,
    type,
    url
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
  }, /*#__PURE__*/React.createElement(Link, {
    to: `/${type}/${url}`,
    onClick: e => props.setOpenCart(false)
  }, sale ? /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, `-${percent}%`) : "", name)), /*#__PURE__*/React.createElement("div", {
    className: "price__and__amount"
  }, /*#__PURE__*/React.createElement("p", {
    className: "price"
  }, sale ? sale.toLocaleString() : price.toLocaleString(), " \u0111", /*#__PURE__*/React.createElement("br", null), sale ? /*#__PURE__*/React.createElement("del", {
    className: "cost"
  }, price.toLocaleString(), " \u0111") : ""), !props.edit && /*#__PURE__*/React.createElement("div", {
    className: "amount"
  }, /*#__PURE__*/React.createElement("button", {
    className: "action",
    onClick: e => props.changeAmount(props.index, "minus")
  }, "\u2193"), /*#__PURE__*/React.createElement("span", null, props.amount), /*#__PURE__*/React.createElement("button", {
    className: "action",
    onClick: e => props.changeAmount(props.index, "add")
  }, "\u2191")), props.edit && /*#__PURE__*/React.createElement("button", {
    className: "delete",
    type: "button",
    onClick: e => props.remove(id)
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/delete.svg",
    alt: ""
  })))));
};

const Cart = props => {
  const removeProduct = id => {
    const products = props.cart.filter(item => item.product.id != id);
    props.remove(products);
  };

  const cartRef = React.createRef();

  const handleCartClickOutside = e => {
    if (props.openCart && !cartRef.current.contains(e.target)) props.setOpenCart(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleCartClickOutside);
    return () => window.removeEventListener("click", handleCartClickOutside);
  });
  const [edit, setEdit] = useState(false);
  const products = props.cart.map(({
    product,
    amount
  }, index) => /*#__PURE__*/React.createElement(Product, {
    product: product,
    index: index,
    amount: amount,
    key: product.id,
    remove: removeProduct,
    changeAmount: props.changeAmount,
    setOpenCart: props.setOpenCart,
    edit: edit
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "cart__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart",
    ref: cartRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "heading"
  }, "Gi\u1ECF h\xE0ng"), /*#__PURE__*/React.createElement("div", {
    className: "header__action"
  }, props.cart.length > 0 && /*#__PURE__*/React.createElement("button", {
    style: {
      backgroundColor: "#ffffff",
      border: "0",
      outline: "none",
      marginRight: "2rem",
      cursor: "pointer"
    },
    onClick: e => setEdit(!edit)
  }, edit ? "Xong" : "Xóa"), /*#__PURE__*/React.createElement("button", {
    style: {
      backgroundColor: "#ffffff",
      border: "0",
      outline: "none"
    },
    onClick: e => props.setOpenCart(false)
  }, /*#__PURE__*/React.createElement("img", {
    className: "close",
    src: "assets/img/close.svg",
    alt: "close"
  })))), products.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "product__list"
  }, products) : /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      textAlign: "center",
      padding: "0 1rem"
    }
  }, "Kh\xF4ng c\xF3 s\u1EA3n ph\u1EA9m. Nh\u1EA5n n\xFAt MUA NGAY \u0111\u1EC3 th\xEAm s\u1EA3n ph\u1EA9m b\u1EA1n mu\u1ED1n mua v\xE0o gi\u1ECF h\xE0ng nh\xE9!"), props.cart.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "num"
  }, "T\u1ED5ng s\u1ED1 s\u1EA3n ph\u1EA9m: ", /*#__PURE__*/React.createElement("span", null, props.numOfProductsInCart)), /*#__PURE__*/React.createElement("p", {
    className: "bill"
  }, "T\u1ED5ng thanh to\xE1n:", " ", /*#__PURE__*/React.createElement("span", null, props.totalBill.toLocaleString(), " \u0111")), /*#__PURE__*/React.createElement("p", {
    className: "reduced"
  }, "T\u1ED5ng khuy\u1EBFn m\xE3i:", " ", /*#__PURE__*/React.createElement("span", null, props.totalReduced.toLocaleString(), " \u0111")), /*#__PURE__*/React.createElement(Link, {
    to: "/thanh-toan",
    className: "button",
    onClick: e => props.setOpenCart(false)
  }, "Thanh to\xE1n ngay v\xE0 lu\xF4n")))));
};

export default Cart;