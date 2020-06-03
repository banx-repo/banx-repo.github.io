const {
  useState,
  useEffect
} = React;
const {
  Link
} = ReactRouterDOM;

const MobileNav = props => {
  const [menu, setMenu] = useState(false);
  const menuRef = React.createRef();

  const handleMenuClickOutside = e => {
    if (menu && !menuRef.current.contains(e.target)) setMenu(!menu);
  };

  useEffect(() => {
    window.addEventListener("click", handleMenuClickOutside);
    return () => window.removeEventListener("click", handleMenuClickOutside);
  });
  return /*#__PURE__*/React.createElement("nav", {
    className: "app__mobile__nav"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("li", {
    className: "menu__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/logo.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "Trang ch\u1EE7"))), /*#__PURE__*/React.createElement("li", {
    className: "menu__item",
    onClick: e => setMenu(!menu)
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/menu.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "Menu")), /*#__PURE__*/React.createElement("li", {
    className: "menu__item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+84965338283"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/phone.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "G\u1ECDi ngay"))), /*#__PURE__*/React.createElement("li", {
    className: "menu__item",
    onClick: e => props.setOpenCart(true)
  }, /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/outline-bag.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "num__of__products__in__cart"
  }, props.numOfProductsInCart)), /*#__PURE__*/React.createElement("span", null, "Gi\u1ECF h\xE0ng")), /*#__PURE__*/React.createElement("li", {
    className: "menu__item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/user.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "T\xE0i kho\u1EA3n"))), menu && /*#__PURE__*/React.createElement("ul", {
    className: "mobile__menu animate__animated animate__slideInLeft",
    ref: menuRef
  }, /*#__PURE__*/React.createElement("li", {
    className: "mobile__menu__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho",
    onClick: e => setMenu(!menu)
  }, "D\xE0nh cho ch\xF3 ", /*#__PURE__*/React.createElement("span", {
    className: "angle--down"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "sub__menu"
  }, /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=thuc-an",
    onClick: e => setMenu(!menu)
  }, "Th\u1EE9c \u0103n")), /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=phu-kien",
    onClick: e => setMenu(!menu)
  }, "Ph\u1EE5 ki\u1EC7n")), /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=do-dung",
    onClick: e => setMenu(!menu)
  }, "\u0110\u1ED3 d\xF9ng")), /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=ve-sinh",
    onClick: e => setMenu(!menu)
  }, "V\u1EC7 sinh")), /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=chuong-tui-long-van-chuyen",
    onClick: e => setMenu(!menu)
  }, "Chu\u1ED3ng, t\xFAi, l\u1ED3ng v\u1EADn chuy\u1EC3n")), /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=y-te",
    onClick: e => setMenu(!menu)
  }, "Y t\u1EBF")))), /*#__PURE__*/React.createElement("li", {
    className: "mobile__menu__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo",
    onClick: e => setMenu(!menu)
  }, "D\xE0nh cho m\xE8o ", /*#__PURE__*/React.createElement("span", {
    className: "angle--down"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "sub__menu"
  }, /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=thuc-an",
    onClick: e => setMenu(!menu)
  }, "Th\u1EE9c \u0103n")), /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=phu-kien",
    onClick: e => setMenu(!menu)
  }, "Ph\u1EE5 ki\u1EC7n")), /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=do-dung",
    onClick: e => setMenu(!menu)
  }, "\u0110\u1ED3 d\xF9ng")), /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=ve-sinh",
    onClick: e => setMenu(!menu)
  }, "V\u1EC7 sinh")), /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=chuong-tui-long-van-chuyen",
    onClick: e => setMenu(!menu)
  }, "Chu\u1ED3ng, t\xFAi, l\u1ED3ng v\u1EADn chuy\u1EC3n")), /*#__PURE__*/React.createElement("li", {
    className: "sub__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=y-te",
    onClick: e => setMenu(!menu)
  }, "Y t\u1EBF")))), /*#__PURE__*/React.createElement("li", {
    className: "mobile__menu__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/bai-viet",
    onClick: e => setMenu(!menu)
  }, "B\xE0i vi\u1EBFt")), /*#__PURE__*/React.createElement("li", {
    className: "mobile__menu__item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/lien-he",
    onClick: e => setMenu(!menu)
  }, "Li\xEAn h\u1EC7"))));
};

export default MobileNav;