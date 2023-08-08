import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { IMAGES } from "../assets/images";

export default function ContactUs({ contact }) {
  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setValue((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
  };

  return (
    <Container fluid className="px-4 px-sm-5 pb-5" ref={contact}>
      <Row className="mt-5">
        <Col md={5}>
          <h3 className="text-primary fw-bold">STAY IN TOUCH</h3>
          <h1 className="mb-1 fw-bold">Contact us</h1>
          <img src={IMAGES.BARS} alt="" />
          <Row>
            <Col xs="12" className="mt-4">
              <img
                src={IMAGES.PHONE}
                alt=""
                width="35px"
                className="me-3 me-sm-2 me-lg-5"
              />
              1-541-754-3010
            </Col>
            <Col xs="12" className="mt-4 pe-0">
              <img
                src={IMAGES.ENVELOPE}
                alt=""
                width="30px"
                className="ms-1 me-3 me-sm-2 me-lg-5"
              />
              support@jointreaty.com
            </Col>
            <Col xs="12" className="my-4 pe-0">
              <img
                src={IMAGES.POINTER}
                alt=""
                width="30px"
                className="ms-1 me-3 me-sm-2 me-lg-5"
              />
              3782 Shady Pines Drive USA
            </Col>
            <Col
              xs="12"
              className="my-4 d-flex d-md-block justify-content-center"
            >
              <div>
                <img
                  className="me-2 me-lg-4 mt-0"
                  src={IMAGES.FB}
                  alt=""
                  style={{ width: "3rem", cursor: "pointer" }}
                />
                <img
                  className="me-2 me-lg-4 mt-0"
                  src={IMAGES.TWITTER}
                  alt=""
                  style={{ width: "2.9rem", cursor: "pointer" }}
                />
                <img
                  className="me-2 me-lg-4 mt-0"
                  src={IMAGES.INSTA}
                  alt=""
                  style={{ width: "2.9rem", cursor: "pointer" }}
                />
                <img
                  className="me-2 me-lg-4 mt-0"
                  src={IMAGES.YOUTUBE}
                  alt=""
                  style={{ width: "2.9rem", cursor: "pointer" }}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={7}>
          <Card className="p-4 p-md-5 border-0 rounded-0 shadow">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      required
                      className="rounded-0 p-3 mb-3"
                      name="name"
                      value={value.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="NAME *"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      required
                      className="rounded-0 p-3 mb-3"
                      name="email"
                      value={value.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="EMAIL *"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      className="rounded-0 p-3 mb-3"
                      name="subject"
                      value={value.subject}
                      onChange={handleChange}
                      type="text"
                      placeholder="SUBJECT *"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      required
                      className="rounded-0 p-3 mb-3"
                      name="message"
                      value={value.message}
                      onChange={handleChange}
                      as="textarea"
                      rows={7}
                      placeholder="MESSAGE *"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} className="d-flex justify-content-end">
                  <Button className="mt-3" type="submit">
                    Submit form
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
