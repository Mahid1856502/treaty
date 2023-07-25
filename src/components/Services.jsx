import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../assets/images";

const Services = ({ services }) => {
  return (
    <Container fluid className="px-4 px-sm-5" ref={services}>
      <Row className="my-5 py-2">
        <Col md={6} className="text-center">
          <img
            src={IMAGES.SLICING}
            alt=""
            style={{ maxWidth: "90%" }}
            className="mb-3"
          />
        </Col>
        <Col md={6} className="mt-3">
          <h3 className="text-primary fw-bold">OUR AMAZING SERVICES</h3>
          <h1 className="fw-bold">Engage the families you serve</h1>
          <img src={IMAGES.BARS} alt="" />
          <h4 className="mb-0 mt-3 fw-bold">
            ELIMINATE HAND WRITTEN MEDICATION LISTS
          </h4>
          <p className="pe-md-5 pe-0 mb-4 card-text">
            Patients and families deserve to have up to date, mobile access to
            their latest medication list
          </p>
          <h4 className="mb-0 fw-bold">EMPOWER THE FAMILIES YOU SERVE</h4>
          <p className="pe-md-5 pe-0 mb-4 card-text">
            Families can now have mobile access to your team's visiting schedule
            and can also request medication and supply refills with a touch of a
            button
          </p>
          <h4 className="mb-0 fw-bold">ACCESS TO IMPORTANT DOCUMENTS</h4>
          <p className="pe-md-5 pe-0 mb-4 card-text">
            Allow families to have mobile access to important documents such as
            consents, plan of care, etc.
          </p>
          <h4 className="mb-0 fw-bold">
            KEEP OTHER FAMILY MEMBERS IN THE LOOP
          </h4>
          <p className="pe-md-5 pe-0 mb-4 card-text">
            Allow your patient's POA to invite other family members to have
            mobile access of their loved one's profile
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
