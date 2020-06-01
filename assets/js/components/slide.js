const {
  useEffect
} = React;

const Slide = props => {
  useEffect(() => {
    $(".slide").slick();
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "slide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item1"
  }, "1"), /*#__PURE__*/React.createElement("div", {
    className: "item2"
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "item3"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "item4"
  }, "4"), /*#__PURE__*/React.createElement("div", {
    className: "item5"
  }, "5"), /*#__PURE__*/React.createElement("div", {
    className: "item6"
  }, "6"), /*#__PURE__*/React.createElement("div", {
    className: "item7"
  }, "7"), /*#__PURE__*/React.createElement("div", {
    className: "item8"
  }, "8"));
};

export default Slide;