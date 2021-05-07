import React from 'react'
import { Link } from 'react-scroll'
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import HeaderTop from './HeaderTop'
import './header.css'

const Header = () => {
  return (
    <>
      <HeaderTop />
      <Navbar
        collapseOnSelect
        className='navbar'
        expand='lg'
        style={{
          backgroundColor: '#012c47',
        }}
        variant='dark'
      >
        <Container>
          <Navbar.Brand href='/'>
            <img src='/images/logo.png' alt='logo' height='50' width='200' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto text-center'>
              <Link to='about'>
                <LinkContainer to='/'>
                  <Nav.Link className='links-nav'>Home</Nav.Link>
                </LinkContainer>
              </Link>
              <NavDropdown
                className='links-nav'
                style={{ marginRight: '0px' }}
                title='Digital Marketing'
                id='collasible-nav-dropdown'
                active
              >
                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Organic SEO</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Local SEO</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/PPC'>
                  <NavDropdown.Item>SEM (PPC)</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/SMM'>
                  <NavDropdown.Item>
                    Social Media Marketing (SMM)
                  </NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Lead Generation</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Website Audit</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>SEO Audit</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>
                    YouTube Video Optimization
                  </NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>App Store Optimization</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Content Creation</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown
                className='links-nav'
                style={{ marginRight: '0px' }}
                title='Development'
                id='collasible-nav-dropdown'
                active
              >
                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Android Development</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>iOS Development</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Software Development</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Web Development</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>
                    Bespoke Software Development
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Front-end Development</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown
                className='links-nav'
                style={{ marginRight: '0px' }}
                title='Designing'
                id='collasible-nav-dropdown'
                active
              >
                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Logo Designing</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/SEO'>
                  <NavDropdown.Item>Web Designing</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <Link to='testimonial'>
                <LinkContainer to='/'>
                  <Nav.Link className='links-nav'></Nav.Link>
                </LinkContainer>
              </Link>

              <Link to='contact'>
                <LinkContainer to='/'>
                  <Nav.Link className='links-nav'>Testimonial</Nav.Link>
                </LinkContainer>
              </Link>
              <Link to='contact'>
                <LinkContainer to='/'>
                  <Nav.Link className='links-nav'>Portfolio</Nav.Link>
                </LinkContainer>
              </Link>
              <Link to='contact'>
                <LinkContainer to='/info/blogs'>
                  <Nav.Link className='links-nav' active>
                    News Updates
                  </Nav.Link>
                </LinkContainer>
              </Link>
              <LinkContainer to='/info/GetQuote'>
                <Button variant='outline-warning' size='sm'>
                  Request a Quote
                </Button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
