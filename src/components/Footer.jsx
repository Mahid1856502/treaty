import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container fluid>
            <Row className="bg-dark py-4">
                <Col className="text-white text-center">Copyright  2019 TreatyHealth All rights reserved.</Col>
            </Row>
        </Container>
    )
}
