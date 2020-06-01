const NavLink = ReactRouterDOM.NavLink;
const Link = ReactRouterDOM.Link;

const Nav = props => {
  return /*#__PURE__*/React.createElement("nav", {
    className: "app-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "app-menu"
  }, /*#__PURE__*/React.createElement("li", {
    className: "menu-item"
  }, /*#__PURE__*/React.createElement(NavLink, {
    activeClassName: "is-active",
    exact: true,
    to: "/"
  }, "Trang ch\u1EE7")), /*#__PURE__*/React.createElement("li", {
    className: "menu-item"
  }, /*#__PURE__*/React.createElement(NavLink, {
    activeClassName: "is-active",
    to: "/danh-cho-cho"
  }, "D\xE0nh cho ch\xF3 ", /*#__PURE__*/React.createElement("span", {
    className: "angle--down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "menu-dropdown"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=thuc-an"
  }, "Th\u1EE9c \u0103n")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=thuc-an-uot"
  }, "Th\u1EE9c \u0103n \u01B0\u1EDBt")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=thuc-an-kho"
  }, "Th\u1EE9c \u0103n kh\xF4")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=snack-xuong-gam-banh-thuong"
  }, "Snack, x\u01B0\u01A1ng g\u1EB7m, b\xE1nh th\u01B0\u1EDFng"))), /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=phu-kien"
  }, "Ph\u1EE5 ki\u1EC7n")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=thoi-trang-phu-kien"
  }, "Th\u1EDDi trang, ph\u1EE5 ki\u1EC7n")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=day-dat-vong-co"
  }, "D\xE2y d\u0103t, v\xF2ng c\u1ED5"))), /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=do-dung"
  }, "\u0110\u1ED3 d\xF9ng")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=do-dung-an-uong"
  }, "\u0110\u1ED3 d\xF9ng \u0103n u\u1ED1ng")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=do-choi"
  }, "\u0110\u1ED3 ch\u01A1i"))), /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=ve-sinh"
  }, "V\u1EC7 sinh")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=dung-cu-ve-sinh"
  }, "D\u1EE5ng c\u1EE5 v\u1EC7 v\u1EC7 sinh")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=ta-bim-lot"
  }, "T\xE3, b\u1EC9m l\xF3t")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=huan-luyen-ve-sinh"
  }, "Hu\u1EA5n luy\u1EC7n v\u1EC7 sinh"))), /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=chuong-tui-long-van-chuyen"
  }, "Chu\u1ED3ng, t\xFAi, l\u1ED3ng v\u1EADn chuy\u1EC3n")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=nha-chuong-cho"
  }, "Nh\xE0, chu\u1ED3ng ch\xF3")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=balo-tui-van-chuyen"
  }, "Balo, t\xFAi v\u1EADn chuy\u1EC3n"))), /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=y-te"
  }, "Y t\u1EBF")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=thuoc-dieu-tri"
  }, "Thu\u1ED1c \u0111i\u1EC1u tr\u1ECB")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-cho?type=thuc-pham-chuc-nang"
  }, "Th\u1EF1c ph\u1EA9m ch\u1EE9c n\u0103ng"))))), /*#__PURE__*/React.createElement("li", {
    className: "menu-item"
  }, /*#__PURE__*/React.createElement(NavLink, {
    activeClassName: "is-active",
    to: "/danh-cho-meo"
  }, "D\xE0nh cho m\xE8o ", /*#__PURE__*/React.createElement("span", {
    className: "angle--down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "menu-dropdown"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=thuc-an"
  }, "Th\u1EE9c \u0103n")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=thuc-an-uot"
  }, "Th\u1EE9c \u0103n \u01B0\u1EDBt")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=thuc-an-kho"
  }, "Th\u1EE9c \u0103n kh\xF4")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=snack-bim-bim"
  }, "Snack, bim bim"))), /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=phu-kien"
  }, "Ph\u1EE5 ki\u1EC7n")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=thoi-trang-phu-kien"
  }, "Th\u1EDDi trang, ph\u1EE5 ki\u1EC7n")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=day-dat-vong-co"
  }, "D\xE2y d\u0103t, v\xF2ng c\u1ED5"))), /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=do-dung"
  }, "\u0110\u1ED3 d\xF9ng")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=do-dung-an-uong"
  }, "\u0110\u1ED3 d\xF9ng \u0103n u\u1ED1ng")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=do-choi"
  }, "\u0110\u1ED3 ch\u01A1i"))), /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=ve-sinh"
  }, "V\u1EC7 sinh")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=dung-cu-ve-sinh"
  }, "D\u1EE5ng c\u1EE5 v\u1EC7 v\u1EC7 sinh")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=ta-bim-lot"
  }, "T\xE3, b\u1EC9m l\xF3t")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=huan-luyen-ve-sinh"
  }, "Hu\u1EA5n luy\u1EC7n v\u1EC7 sinh"))), /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=chuong-tui-long-van-chuyen"
  }, "Chu\u1ED3ng, t\xFAi, l\u1ED3ng v\u1EADn chuy\u1EC3n")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=nha-chuong-meo"
  }, "Nh\xE0, chu\u1ED3ng m\xE8o")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=balo-tui-van-chuyen"
  }, "Balo, t\xFAi v\u1EADn chuy\u1EC3n"))), /*#__PURE__*/React.createElement("dl", {
    className: "sub-menu"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=y-te"
  }, "Y t\u1EBF")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=thuoc-dieu-tri"
  }, "Thu\u1ED1c \u0111i\u1EC1u tr\u1ECB")), /*#__PURE__*/React.createElement("dd", {
    className: "sub-category"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/danh-cho-meo?type=thuc-pham-chuc-nang"
  }, "Th\u1EF1c ph\u1EA9m ch\u1EE9c n\u0103ng"))))), /*#__PURE__*/React.createElement("li", {
    className: "menu-item"
  }, /*#__PURE__*/React.createElement(NavLink, {
    activeClassName: "is-active",
    to: "/bai-viet"
  }, "B\xE0i vi\u1EBFt")), /*#__PURE__*/React.createElement("li", {
    className: "menu-item"
  }, /*#__PURE__*/React.createElement(NavLink, {
    activeClassName: "is-active",
    to: "/lien-he"
  }, "Li\xEAn h\u1EC7")))));
};

export default Nav;