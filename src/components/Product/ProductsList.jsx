import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/CartSlice.js";
import styles from "./ProductsList.module.css";
import { toast } from "react-toastify";

const ProductsList = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
    toast.success("Product added successfully"); 
  };

  return (
    <div className={styles.productItem}>
      <div className={styles.productInfo}>
        <img src={product?.image?.secure_url} alt="product" />
        <p className={styles.title}>{product?.title}</p>
      </div>
      <div className={styles.footer}>
        <span className={styles.price}>EGP {product?.price}</span>
        <Button
          variant="success"
          onClick={handleAddToCart}
          className="rounded-0"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductsList;
