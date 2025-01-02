import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join New Ads</p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name='email' placeholder='Your Email' className="footer-input" />
            <button className="btn--outline" style={{cursor: 'pointer'}}>Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/Abouts'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Inventors</Link>
            <Link to='/'>Term of Services</Link>
            <Link to='/'>Policies</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='/Abouts'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Inventors</Link>
            <Link to='/'>Term of Services</Link>
            <Link to='/'>Policies</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/Abouts'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Inventors</Link>
            <Link to='/'>Term of Services</Link>
            <Link to='/'>Policies</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='/Abouts'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Inventors</Link>
            <Link to='/'>Term of Services</Link>
            <Link to='/'>Policies</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/' className="social-logo">
              Harry <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">Harry copyrights</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to='/' target='_blank' aria-label='Facebook'>
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="social-icon-link instagram" to='/' target='_blank' aria-label='instagram'>
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="social-icon-link linkedin" to='/' target='_blank' aria-label='linkedin'>
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link className="social-icon-link youtube" to='/' target='_blank' aria-label='youtube'>
              <i className="fab fa-youtube"></i>
            </Link>
            <Link className="social-icon-link twitter" to='/' target='_blank' aria-label='twitter'>
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
