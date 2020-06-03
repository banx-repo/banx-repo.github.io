const {
  useParams
} = ReactRouterDOM;

const ProductDetails = props => {
  const {
    id
  } = useParams();
  return /*#__PURE__*/React.createElement("h1", null, "S\u1EA3n ph\u1EA9m: ", id);
};

export default ProductDetails;