import React from 'react'
import './footer.css'
import { Link } from 'react-scroll'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
  return (
    <>
      <footer id='footer'>
        {
          <div class='footer-top'>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-6 col-md-6'>
                  <div class='footer-info'>
                    <Link to='slider'>
                      <LinkContainer to='/'>
                        <img
                          src='/images/logo.png'
                          className='d-inline-block align-top '
                          alt='DIGI Premier'
                        />
                      </LinkContainer>
                    </Link>
                    <br />

                    <p>
                      MB-269 2nd Floor, DHA Phase 6 - Lahore <br />
                      <br />
                      <strong>
                        <i className='fas fa-phone'></i>
                      </strong>
                      {'   '}
                      0333 0668656
                      <br />
                      <strong>
                        <i class='far fa-envelope'></i>
                      </strong>
                      {'   '}
                      info@digipremier.com
                      <br />
                      <strong>
                        <i className='fas fa-globe'></i>
                      </strong>
                      {'   '}
                      www.digipremier.com
                      <br />
                    </p>
                    <div class='social-links mt-3'>
                      <a
                        href='https://www.facebook.com/digipremier1/'
                        target='blank'
                      >
                        <i className='fab fa-facebook-f'></i>
                      </a>
                      <a href='https://twitter.com/digipremier' target='blank'>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a
                        href='https://www.linkedin.com/in/digi-primier-8bb11720a/'
                        target='blank'
                      >
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                      <a
                        href='https://www.instagram.com/digipremier/'
                        target='blank'
                      >
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href='/'>
                        <i className='fas fa-globe'></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=' col-lg-6 col-md-6'>
                  <form>
                    <h3 className=' text-center mb-4'>Subscribe</h3>
                  </form>
                </div>
              </div>
            </div>
            <div className='pt-4 copy-write text-white text-center'>
              Copyright &copy; {new Date().getFullYear()}
              <strong>
                <span> DIGI PREMIER</span>
              </strong>
              . All Rights Reserved.
            </div>
          </div>
        }
      </footer>
    </>
  )
}

export default Footer
