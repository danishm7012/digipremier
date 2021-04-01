import React from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import ClientsData from '../../Data/clients'

const Clients = () => {
  return (
    <div className='section'>
      <Container>
        <Row>
          {ClientsData.map((c) => (
            <Col lg={3} md={3} sm={6} xm={6}>
              <Card style={{ width: '17rem', marginTop: '0.2rem' }}>
                <Card.Img variant='top' src={c.logo} />
                <Card.Body>
                  <Card.Title>{c.name}</Card.Title>
                  <Card.Text>{`${c.description.slice(0, 100)}...`}</Card.Text>
                  <a href={c.website} rel='noreferrer' target='_blank'>
                    <Button variant='primary'>Visit Website</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Clients
