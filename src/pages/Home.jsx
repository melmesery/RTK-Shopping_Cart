import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/ProductSlice.js";
import ProductsList from "../components/Product/ProductsList.jsx";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const { myProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container className="py-5">
      <Row>
        {myProducts?.map((product) => (
          <Col xl={3} key={product._id}>
            <ProductsList product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
