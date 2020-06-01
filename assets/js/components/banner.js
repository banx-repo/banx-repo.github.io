const Link = ReactRouterDOM.Link;

const Banner = props => {
  return /*#__PURE__*/React.createElement("section", {
    className: "app-banner animate__animated animate__fadeIn animate__slow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/banner/banner-text.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/img/banner/banner.svg",
    alt: ""
  }))));
};

export default Banner;