import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../asset/css/card.css";

const OrderCard = ({ data }) => {
  console.log(data);
  return (
    <Card className="card-container" key={data.title} id={data.id} tag="a">
      <div>
        <Card.Body>
          <Row>
            <div className="cardItem__image">{data.img}</div>
            <Col>
              <Card.Title className="cardItem__header">{data.title}</Card.Title>
              <Card.Subtitle className="cardItem__details">
                {data.subtitle}
              </Card.Subtitle>
              <Card.Footer className="cardItem__footer">
                <small className="text-muted">{data.text}</small>
              </Card.Footer>
              <h6>Amount Payable : {data.amount}</h6>
            </Col>
          </Row>
        </Card.Body>
      </div>
    </Card>
  );
};

export default OrderCard;
