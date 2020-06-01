const {
  useState,
  useEffect
} = React;
import Product from "./product.js";

const Promo = props => {
  useEffect(() => {
    $(".slider").slick({
      arrows: false,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2500,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      }, {
        breakpoint: 999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      }, {
        breakpoint: 799,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      }, {
        breakpoint: 599,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      }]
    });
  });

  const prev = () => {
    $(".slider").slick("slickPrev");
  };

  const next = () => {
    $(".slider").slick("slickNext");
  };

  const products = props.products.map(product => /*#__PURE__*/React.createElement(Product, {
    product: product,
    key: product.id
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "app-promo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/promo.svg",
    alt: ""
  }), "Khuy\u1EBFn m\xE3i hot")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: "product-list"
  }, /*#__PURE__*/React.createElement("button", {
    className: "prev",
    type: "button",
    onClick: e => prev()
  }, /*#__PURE__*/React.createElement("span", {
    className: "angle--left"
  })), products.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "slider"
  }, products), /*#__PURE__*/React.createElement("button", {
    className: "next",
    type: "button",
    onClick: e => next()
  }, /*#__PURE__*/React.createElement("span", {
    className: "angle--right"
  })))));
};

export default Promo;