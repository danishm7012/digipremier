import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'

const Testimonial = () => {
  return (
    <div id='testimonial' className='section text-center '>
      <h1>Testimonials</h1>
      <Container>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <Card>
              <Card.Img src='/images/teams/1.png'></Card.Img>
              <Card.Title>SEO Expert</Card.Title>
            </Card>
          </Col>
          <Col lg={3} md={3} sm={3}>
            <Card>
              <Card.Img src='/images/teams/2.png'></Card.Img>
              <Card.Title>SMM Specialist</Card.Title>
            </Card>
          </Col>
          <Col lg={3} md={3} sm={3}>
            <Card>
              <Card.Img src='/images/teams/4.png'></Card.Img>
              <Card.Title>Project manager</Card.Title>
            </Card>
          </Col>
          <Col lg={3} md={3} sm={3}>
            <Card>
              <Card.Img src='/images/teams/3.png'></Card.Img>
              <Card.Title>Project manager</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonial
