const ServiceItem = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "service-item"
  }, /*#__PURE__*/React.createElement("img", {
    src: `assets/img/service/${props.img}.svg`,
    alt: props.img
  }), /*#__PURE__*/React.createElement("div", {
    className: "service-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "heading"
  }, props.heading), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, props.description)));
};

const Service = props => {
  return /*#__PURE__*/React.createElement("section", {
    className: "app-service animate__animated animate__fadeInUp animate__delay-0.5s"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(ServiceItem, {
    img: "service-1",
    heading: "Mua h\xE0ng COD",
    description: "Nh\u1EADn h\xE0ng thanh to\xE1n"
  }), /*#__PURE__*/React.createElement(ServiceItem, {
    img: "service-2",
    heading: "Freeship",
    description: "Mi\u1EC5n ph\xED v\u1EADn chuy\u1EC3n t\u1EEB 200k"
  }), /*#__PURE__*/React.createElement(ServiceItem, {
    img: "service-3",
    heading: "S\u1EA3n ph\u1EA9m ch\xEDnh h\xE3ng",
    description: "Nh\u1EADp kh\u1EA9u ch\xEDnh h\xE3ng 100%"
  }), /*#__PURE__*/React.createElement(ServiceItem, {
    img: "service-4",
    heading: "\u0110\u1ED5i tr\u1EA3 d\u1EC5 d\xE0ng",
    description: "\u0110\u1ED5i tr\u1EA3 trong v\xF2ng 30 ng\xE0y"
  })));
};

export default Service;