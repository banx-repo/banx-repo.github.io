const {
  Link,
  useQuery,
  useLocation,
  useParams
} = ReactRouterDOM;

const ProductDetails = props => {
  const {
    url
  } = useParams();
  return /*#__PURE__*/React.createElement("h1", null, "S\u1EA3n ph\u1EA9m: ", url);
};

export default ProductDetails;