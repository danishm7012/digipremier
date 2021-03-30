import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section id='contact' class='contact'>
      <div class='container' data-aos='fade-up'>
        <div class='section-title'>
          <br />
          <h1>Contact Us: </h1>
        </div>

        <div>
          <iframe
            style={{ width: '100%', height: '270px' }}
            title='map location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.856021269435!2d74.44888923752985!3d31.476873046867944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190920e59fccd3%3A0x56cae6ee2c7a479b!2sDHA%20Phase%206%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1617100492948!5m2!1sen!2s'
            frameborder='0'
            allowfullscreen
          ></iframe>
        </div>

        <div class='row mt-5'>
          <div class='col-lg-4'>
            <div class='info'>
              <div class='address'>
                <i class='fas fa-map-marker-alt'></i>
                <h4>Location:</h4>
                <p>MB-269 Second Floor, DHA Phase 6 - Lahore, Pakistan</p>
              </div>

              <div class='email'>
                <i class='far fa-envelope'></i>
                <h4>Email:</h4>
                <p>info@digipremier.org</p>
              </div>

              <div class='phone'>
                <i class='fas fa-mobile-alt'></i>
                <h4>Call:</h4>
                <p>+92 333 0668 656</p>
              </div>
            </div>
          </div>

          <div class='col-lg-8 mt-5 mt-lg-0'>
            <form
              action='forms/contact.php'
              method='post'
              class='php-email-form'
            >
              <div class='row'>
                <div class='col-md-6 form-group'>
                  <input
                    type='text'
                    name='name'
                    class='form-control text-line'
                    id='name'
                    placeholder='Your Name'
                    data-rule='minlen:4'
                    data-msg='Please enter at least 4 chars'
                  />
                  <div class='validate'></div>
                </div>
                <div class='col-md-6 form-group mt-3 mt-md-0'>
                  <input
                    type='email'
                    class='form-control text-line'
                    name='email'
                    id='email'
                    placeholder='Your Email'
                    data-rule='email'
                    data-msg='Please enter a valid email'
                  />
                  <div class='validate'></div>
                </div>
              </div>
              <div class='form-group mt-3'>
                <input
                  type='text'
                  class='form-control text-line'
                  name='subject'
                  id='subject'
                  placeholder='Subject'
                  data-rule='minlen:4'
                  data-msg='Please enter at least 8 chars of subject'
                />
                <div class='validate'></div>
              </div>
              <div class='form-group mt-3'>
                <textarea
                  class='form-control text-line'
                  name='message'
                  rows='5'
                  data-rule='required'
                  data-msg='Please write something for us'
                  placeholder='Message'
                ></textarea>
                <div class='validate'></div>
              </div>
              <div class='mb-3'>
                <div class='loading'>Loading</div>
                <div class='error-message'></div>
                <div class='sent-message'>
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class='text-center'>
                <button type='submit'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
