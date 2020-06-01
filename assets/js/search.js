const useLocation = ReactRouterDOM.useLocation;

const Search = props => {
  const query = new URLSearchParams(useLocation().search);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", null, "Trang t\xECm ki\u1EBFm"), /*#__PURE__*/React.createElement("h3", null, "S\u1EA3n ph\u1EA9m: ", query.get("san-pham")));
};

export default Search;