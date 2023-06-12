import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { list } = useSelector((state) => state.cart);

  return (
    <div className={styles.header}>
      <Container className="py-2">
        <div className={styles.navbar}>
          <Link to="/">
            <h1 className="mb-0">Sneaker</h1>
          </Link>
          <Link to="/cart" className={styles.cartIcon}>
            <AiOutlineShoppingCart />
            <span>{list?.length}</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
