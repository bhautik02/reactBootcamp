import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>Product details</h1>
      <p>{params.id}</p>
    </>
  );
};
export default ProductDetails;
