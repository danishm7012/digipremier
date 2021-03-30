import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import ServiceData from '../../Data/serviceData'
import Service from './Service'

import './services.css'

const Services = () => {
  return (
    <div className='services'>
      <Container>
        <Row>
          <Col className='text-center'>
            <h1 className='py-5'>Our Services</h1>
          </Col>
        </Row>
        <Row>
          {ServiceData.map((s) => (
            <Service
              _id={s._id}
              image={s.image}
              name={s.name}
              text={s.text}
              icon={s.icon}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Services
