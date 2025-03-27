import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="container mt-5">
      <h1>Product ID: {id}</h1>
      <p>This is the product page for product with ID: {id}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
};

export default Product;
