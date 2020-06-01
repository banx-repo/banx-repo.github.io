const {
  useState,
  useEffect
} = React;

const Select = props => {
  const [show, setStatus] = useState(false);
  const selectList = React.createRef();

  const handleClick = item => {
    setStatus(!show);
    props.handleChange(item);
  };

  const handleClickOutside = e => {
    if (show && !selectList.current.contains(e.target)) {
      setStatus(!show);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "select",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "select-input",
    onClick: e => setStatus(!show)
  }, /*#__PURE__*/React.createElement("p", {
    className: "selected",
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, props.selected.text, /*#__PURE__*/React.createElement("span", {
    className: "triangle",
    style: {
      display: "inline-block",
      width: "0",
      height: "0",
      borderStyle: "solid",
      borderWidth: "5px 5px 0 5px",
      borderColor: "#111111 transparent transparent transparent",
      transform: show ? "rotate(180deg)" : "",
      marginLeft: ".5rem"
    }
  }))), show && /*#__PURE__*/React.createElement("ul", {
    className: "select-list",
    style: {
      position: "absolute",
      marginTop: "0.5rem",
      width: "max-content",
      backgroundColor: "#ffffff",
      boxShadow: "0 0 5px rgba(0, 0, 0, .25)",
      padding: "0.5rem 0",
      zIndex: "1000"
    },
    ref: selectList
  }, props.options.map((item, key) => /*#__PURE__*/React.createElement("li", {
    className: "select-option",
    onClick: e => handleClick(item),
    style: {
      padding: "0.4rem 1rem"
    }
  }, item.text))));
};

export default Select;