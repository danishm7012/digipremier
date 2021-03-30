import React from 'react'
import { Link } from 'react-scroll'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      style={{
        padding: '0',
      }}
      variant='dark'
      fixed='top'
    >
      <Container>
        <Navbar.Brand to='/'>
          <img src='/images/logo.png' alt='logo' height='70' width='150' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='about'>
              <LinkContainer to='/'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Link>

            <Link to='testimonial'>
              <LinkContainer to='/'>
                <Nav.Link>Testimonials</Nav.Link>
              </LinkContainer>
            </Link>

            <LinkContainer to='/info/clients'>
              <Nav.Link href='/info/clients'>Clients</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/info/blogs'>
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/info/career'>
              <Nav.Link>Career</Nav.Link>
            </LinkContainer>

            <Link to='contact'>
              <LinkContainer to='/'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Link>
            <NavDropdown title='Services' id='collasible-nav-dropdown'>
              <LinkContainer to='/SEO'>
                <NavDropdown.Item>Search Engine Optimization</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/SEM'>
                <NavDropdown.Item>Search Engine Marketing</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/PPC'>
                <NavDropdown.Item>PPC</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/SMM'>
                <NavDropdown.Item>Social Media Marketing</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/Back-Link-Building'>
                <NavDropdown.Item>Back-Link Building</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/Content-Marketing'>
                <NavDropdown.Item>Content Marketing</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/Affiliate-Marketing'>
                <NavDropdown.Item>Affiliate Marketing</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/Email-SMS-Marketing'>
                <NavDropdown.Item>Email & SMS Marketing</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/Radio-Television-Marketing'>
                <NavDropdown.Item>
                  Radio & Television Marketing
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header