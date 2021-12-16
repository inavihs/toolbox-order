import React, { useState } from "react";
import "../asset/css/app.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import OrderCard from "../component/Card";
import Modal from "../component/Modal";
import { BagCheck, Laptop, Truck } from "react-bootstrap-icons";
import ContentHeader from "../component/ContentHeader";

const App = () => {
  const [openModal, setopenModal] = useState(false);
  const order_data = [
    {
      id: 1,
      title: "Cover plan for car",
      subtitle: (
        <div className="mb-2 text-muted">
          <span className="Icon">Cover amount : $13,000</span>
        </div>
      ),
      img: <BagCheck />,
      amount: "$90",
      text: <p>Installment : Monthly | You have selected Classic plan.</p>,
    },
    {
      id: 2,
      title: "Cover plan for van",
      subtitle: (
        <div className="mb-2 text-muted">
          <span className="Icon">Cover amount : $10,000</span>
        </div>
      ),
      img: <Truck />,
      amount: "$80",
      text: <p>Installment : Monthly | You have selected Classic plan.</p>,
    },
    {
      id: 3,
      title: "Cover plan for laptop",
      subtitle: (
        <div className="mb-2 text-muted">
          <span className="Icon">Cover amount : $1,000</span>
        </div>
      ),
      img: <Laptop />,
      amount: "$50",
      text: <p>Installment : Annually | You have selected Pro plan.</p>,
    },
  ];
  const handleCheckout = () => {
    setopenModal(true);
  };

  const closeModal = () => {
    setopenModal(false);
  };

  return (
    <main className="content-view">
      <Container fluid>
        <ContentHeader title="Toolbox Cart" noOfItems={order_data.length} />
        <Row>
          <Col className="order-list col-sm-8">
            {order_data.map((item, index) => {
              return <OrderCard data={item} />;
            })}
          </Col>
          <Col className="cehckout-container col-sm-2">
            <Button id="checkout" name="Checkout" onClick={handleCheckout}>
              Checkout
            </Button>
          </Col>
        </Row>
        {openModal && <Modal show={openModal} onHide={closeModal} />}
      </Container>
    </main>
  );
};

export default App;
