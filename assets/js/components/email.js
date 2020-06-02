const {
  useState
} = React;
const Link = ReactRouterDOM.Link;

const Email = props => {
  const [popup, setPopup] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setPopup(!popup);
  };

  return /*#__PURE__*/React.createElement("section", {
    className: "app-email"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/email.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("form", {
    action: "",
    className: "signup",
    onSubmit: e => handleSubmit(e)
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email",
    id: "email",
    required: true,
    placeholder: "Email c\u1EE7a b\u1EA1n"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "\u0110\u0103ng k\xFD"))), popup && /*#__PURE__*/React.createElement("div", {
    className: "popup"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/thank.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("p", null, "C\xE1m \u01A1n b\u1EA1n \u0111\xE3 \u0111\u0103ng k\xFD nh\u1EADn th\xF4ng b\xE1o t\u1EEB", " ", /*#__PURE__*/React.createElement("span", {
    className: "pety"
  }, "Pet", /*#__PURE__*/React.createElement("i", null, "y")), " ", ":)"), /*#__PURE__*/React.createElement("p", null, "Ch\xFAng t\xF4i s\u1EBD spam li\xEAn t\u1EE5c \u0111\xF3 :D"), /*#__PURE__*/React.createElement(Link, {
    to: "/",
    onClick: e => setPopup(!popup)
  }, "Ti\u1EBFp t\u1EE5c kh\xE1m ph\xE1", " ", /*#__PURE__*/React.createElement("span", {
    className: "pety"
  }, "Pet", /*#__PURE__*/React.createElement("i", null, "y"))))));
};

export default Email;