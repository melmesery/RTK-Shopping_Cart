import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeItem, updateQuantity } from "../../store/CartSlice.js";
import styles from "./CartItem.module.css";

const CartItem = ({ item, index }) => {
  const [quantity, setQuantity] = useState(item?.quantity);
  const [totalPrice, setTotalPrice] = useState(item?.price * item?.quantity);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
    setQuantity(value);
  };

  const handleRemove = () => {
    toast.warn("Product deleted");
    dispatch(removeItem({ _id: item?._id }));
  };

  useEffect(() => {
    setTotalPrice(item?.price * quantity);
    dispatch(updateQuantity({ _id: item?._id, quantity }));
  }, [quantity, item?.price, item?._id, dispatch]);

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={item?.image.secure_url}
            alt="product"
            style={{ width: 100 }}
          />
          <p className="mb-0">{item?.title}</p>
        </div>
      </td>
      <td className={styles.price}>EGP {item?.price}</td>
      <td>
        <div className="d-flex align-items-center justify-content-start">
          <button
            className={styles.changeBtn}
            onClick={() => {
              if (quantity > 1) {
                setQuantity((pre) => pre - 1);
              }
            }}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            className={styles.input}
            onChange={handleChange}
          />
          <button
            className={styles.changeBtn}
            onClick={() => setQuantity((pre) => pre + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className={styles.price} style={{ textAlign: "left" }}>
        EGP {totalPrice}
      </td>
      <td>
        <Button variant="danger" className="rounded-0" onClick={handleRemove}>
          <RiDeleteBinLine />
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
