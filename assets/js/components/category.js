const {
  useState,
  useEffect
} = React;
const Link = ReactRouterDOM.Link;
import Select from "./select.js";
import Product from "./product.js";
const mq = MediaQuery.useMediaQuery;

const Category = props => {
  // Select option
  const options = [{
    value: "promo",
    text: "Sản phẩm khuyến mãi"
  }, {
    value: "up",
    text: "Giá thấp"
  }, {
    value: "down",
    text: "Giá cao"
  }]; // Section state

  const [selected, setSelected] = useState(options[0]);
  const [category, setCategory] = useState(null);
  const [numOfProducts, setNumOfProducts] = useState(6); // Responsive

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
  });
  useEffect(() => {
    if (xs) {
      setNumOfProducts(6);
    }

    if (sm) {
      setNumOfProducts(6);
    }

    if (md) {
      setNumOfProducts(6);
    }

    if (lg) {
      setNumOfProducts(8);
    }

    if (xl) {
      setNumOfProducts(10);
    }
  });

  const sort = products => {
    if (selected.value === "promo") {
      return products.sort((a, b) => b.percent - a.percent);
    }

    if (selected.value === "up") {
      return products.sort((a, b) => (a.sale ? a.sale : a.price) - (b.sale ? b.sale : b.price));
    }

    if (selected.value === "down") {
      return products.sort((a, b) => (b.sale ? b.sale : b.price) - (a.sale ? a.sale : a.price));
    }
  };

  const filter = products => {
    if (!category) return products;
    return products.filter(i => i.category === category);
  };

  const products = sort(filter(props.products)).slice(0, numOfProducts).map(item => /*#__PURE__*/React.createElement(Product, {
    key: item.id,
    product: item
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "app-dog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("header", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "heading"
  }, "# ", props.url === "/danh-cho-cho" ? "Dành cho chó" : "Dành cho mèo"), /*#__PURE__*/React.createElement("p", null, "\u01AFu ti\xEAn xem:", " ", /*#__PURE__*/React.createElement(Select, {
    options: options,
    selected: selected,
    handleChange: setSelected
  })), /*#__PURE__*/React.createElement(Link, {
    to: props.url
  }, "Xem t\u1EA5t c\u1EA3 \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "section-main"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "section-filter"
  }, /*#__PURE__*/React.createElement("li", {
    className: "filter-item" + (category === "thuc-an" ? " is-select" : ""),
    onClick: e => setCategory(prev => prev == "thuc-an" ? null : "thuc-an")
  }, "Th\u1EE9c \u0103n"), /*#__PURE__*/React.createElement("li", {
    className: "filter-item" + (category === "phu-kien" ? " is-select" : ""),
    onClick: e => setCategory(prev => prev === "phu-kien" ? null : "phu-kien")
  }, "Ph\u1EE5 ki\u1EC7n"), /*#__PURE__*/React.createElement("li", {
    className: "filter-item" + (category === "do-dung" ? " is-select" : ""),
    onClick: e => setCategory(prev => prev === "do-dung" ? null : "do-dung")
  }, "\u0110\u1ED3 d\xF9ng"), /*#__PURE__*/React.createElement("li", {
    className: "filter-item" + (category === "ve-sinh" ? " is-select" : ""),
    onClick: e => setCategory(prev => prev === "ve-sinh" ? null : "ve-sinh")
  }, "V\u1EC7 sinh"), /*#__PURE__*/React.createElement("li", {
    className: "filter-item" + (category === "chuong-tui-long-van-chuyen" ? " is-select" : ""),
    onClick: e => setCategory(prev => prev === "chuong-tui-long-van-chuyen" ? null : "chuong-tui-long-van-chuyen")
  }, "Chu\u1ED3ng, t\xFAi, l\u1ED3ng v\u1EADn chuy\u1EC3n"), /*#__PURE__*/React.createElement("li", {
    className: "filter-item" + (category === "y-te" ? " is-select" : ""),
    onClick: e => setCategory(prev => prev === "y-te" ? null : "y-te")
  }, "Y t\u1EBF")), products.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "section-list"
  }, products), products.length == 0 && /*#__PURE__*/React.createElement("div", {
    className: "section-list zero-product"
  }, "Oops! Hi\u1EC7n ch\u01B0a c\xF3 s\u1EA3n ph\u1EA9m n\xE0o trong danh m\u1EE5c n\xE0y!"))));
};

export default Category;