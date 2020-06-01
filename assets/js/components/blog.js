const Link = ReactRouterDOM.Link;
const {
  useEffect,
  useState
} = React;
const mq = MediaQuery.useMediaQuery;

const Post = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "post"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "title"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/bai-viet"
  }, "Chia s\u1EBB b\xED quy\u1EBFt ch\u0103m s\xF3c th\xFA c\u01B0ng t\u1ED1t nh\u1EA5t trong m\xF9a C\xF4vy")), /*#__PURE__*/React.createElement("p", {
    className: "time"
  }, "24/05/2020 08:12:23")), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/post/1 120x120.png",
    alt: "1"
  })), /*#__PURE__*/React.createElement("div", {
    className: "details"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sort-details"
  }, "C\xF9ng Pety t\xECm hi\u1EC3u nh\u1EEFng b\xED quy\u1EBFt ch\u0103m s\xF3c th\xFA c\u01B0ng an to\xE0n m\xF9a C\xF4vy nh\xE9"), /*#__PURE__*/React.createElement(Link, {
    to: "/bai-viet"
  }, "Chi ti\u1EBFt \u2192"))));
};

const Blog = props => {
  // State
  const [numOfPosts, setNumOfPosts] = useState(2); // Responsive

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
      setNumOfPosts(2);
    }

    if (sm) {
      setNumOfPosts(2);
    }

    if (md) {
      setNumOfPosts(2);
    }

    if (lg) {
      setNumOfPosts(3);
    }

    if (xl) {
      setNumOfPosts(3);
    }
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "app-blog",
    id: "blog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement("h3", null, "# B\xE0i vi\u1EBFt m\u1EDBi nh\u1EA5t")), /*#__PURE__*/React.createElement("div", {
    className: "blog-list"
  }, new Array(numOfPosts).fill(null).map((v, i) => /*#__PURE__*/React.createElement(Post, {
    key: i
  }))), /*#__PURE__*/React.createElement(Link, {
    to: "/bai-viet",
    className: "button--more"
  }, "Xem th\xEAm")));
};

export default Blog;