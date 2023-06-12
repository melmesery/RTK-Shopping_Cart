import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem.jsx";

const Cart = () => {
  const { list, total } = useSelector((state) => state.cart);

  return (
    <Container className="py-5">
      <Row>
        {list && list?.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ verticalAlign: "middle" }}>
              {list?.map((item, index) => (
                <CartItem key={index} item={item} index={index} />
              ))}
              <tr style={{ fontSize: 20, textAlign: "right" }}>
                <td colSpan={3} className="fw-bold">Total:</td>
                <td >EGP {total}</td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <h4 className="text-center pt-5 fw-bold">No products added yet!</h4>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
