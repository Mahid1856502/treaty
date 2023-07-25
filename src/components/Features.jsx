import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../assets/images";

export default function Features({ about }) {
  const features = [
    {
      title: "Messaging",
      desc: "Direct and Group Message your team",
      icon: IMAGES.CHAT,
    },
    {
      title: "Medication",
      desc: "Track supply and medication refills by last requested date by patient's family",
      icon: IMAGES.MEDICATION,
    },
    {
      title: "Schedule",
      desc: "Transparent Scheduling for all team members on shared calendars with mobile access",
      icon: IMAGES.SCHEDULE,
    },
    {
      title: "Compliance",
      desc: "Ensure compliance by allowing patients to have mobile, up to date access to their medication list",
      icon: IMAGES.COMPILANCE,
    },
    {
      title: "Track Visit",
      desc: "Track your staff's made visits to each patient",
      icon: IMAGES.VISIT_TRACK,
    },
  ];
  return (
    <Container ref={about} fluid className="px-4 px-sm-5">
      <Row className="d-flex justify-content-around my-5 py-2">
        {features.map((item) => (
          <Col xs="8" sm="4" md="3" lg="2" className="mt-3 p-0">
            <Card className="border-0 d-flex align-items-center">
              <div className="border feature-icon-bg">
                <img
                  src={item.icon}
                  className="mx-auto p-3 feature-icon"
                  alt=""
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="fs-sm text-secondary">
                  {item.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
