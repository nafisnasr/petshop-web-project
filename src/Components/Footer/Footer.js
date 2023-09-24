import React from 'react'
import { GrFacebookOption } from "react-icons/gr"
import { BsInstagram, BsTwitter } from "react-icons/bs"
import "./Footer.css"

export default function Footer() {
  return (

    <footer>
      <div className="container" >
        <div className="footer-wrapper row" dir='rtl'>

          <div className="col-lg-3 col-md-6 col-11">
            <div className="footer_col-wrapper">

              <h3 className="footer_title my-2">How to Help</h3>
              <li className="footer_item">About Us</li>
              <li className="footer_item">FAQ</li>
              <li className="footer_item">Blog</li>
              <li className="footer_item">Delivery</li>
              <li className="footer_item">Contact Us</li>

            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-11 ">
            <div className="footer_col-wrapper">

              <h3 className="footer_title my-2">Quick Links</h3>
              <li className="footer_item">Cats</li>
              <li className="footer_item">Puppy</li>
              <li className="footer_item">Kitten</li>
              <li className="footer_item">Whole Prey</li>
              <li className="footer_item">Small Animals</li>

            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-11">
            <div className="footer_col-wrapper">

              <h3 className="footer_title my-2">Address</h3>
              <li className="footer_item">15-17 Oldgate</li>
              <li className="footer_item">Morpeth</li>
              <li className="footer_item">NE61 1QF</li>
              <li className="footer_item">+001 (313) 512 895</li>
              <li className="footer_item">info@petcare.co.uk</li>

            </div>
          </div>


          <div className="col-lg-3 col-md-6 col-11">
            <div className="footer_col-wrapper">

              <h1 className="footer_title my-2">Pet Care</h1>
              <h4 className="footer_title my-2">Opening times</h4>
              <p className="footer_item">
                Monday-Saturday-10am-4pm
                Sunday: closed
              </p>


              <div className="footer_social-media">
                <span className="footer_icon-box">
                  <GrFacebookOption className="footer_icon" />
                </span>
                <span className="footer_icon-box">
                  <BsTwitter className="footer_icon" />
                </span>
                <span className="footer_icon-box">
                  <BsInstagram className="footer_icon" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>

  )
}
