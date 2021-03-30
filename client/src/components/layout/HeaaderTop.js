import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SamplePage from '../translatorApi/TestedApi'
import '../translatorApi/TranslateAPI.css'
function HeaaderTop() {
  return (
    <div>
      <Navbar className='nav1' expand='md'>
        <Nav className='ml-auto textcolors' navbar>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@paradisegoc.com&su=Our beloved paradise goc&body=Leave a message!%20'>
              <strong className='fas fa-envelope faHeader'></strong>
              <span>info@digipremier.org</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link href='tel:44 7391 758721'>
              <strong className='fas fa-phone-alt faHeader'></strong>
              <span>+92 333 0668 656</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className='translateApi'>
            <SamplePage />
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

export default HeaaderTop
