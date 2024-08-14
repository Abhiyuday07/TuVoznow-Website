import React from 'react'
// import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img src="./assets/images/tuvoznow-logo.png" />
            </div>
            <div className="col-lg-2">
              <ul className="footerMenu">
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Regions </a></li>
                <li><a href="#"> Regions </a></li>
                <li><a href="#"> Regions </a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <p className="copytext">
                Having troubles? <a href="#">Contact Support</a>
              </p>
              <p className="copytext">All rights reserved @ tuvoznow 2023</p>
              <p>TuVozNow <a href="#">PRIVACY POLICY</a></p>
            </div>
            <div className="col-lg-3 playstoreFooterLogo">
              <a href="#"> <img src="./assets/images/google-play1.png" /></a>
              <a href="#"> <img src="./assets/images/app-store 1.png" /></a>
            </div>
            <div className="col-lg-12 footerBottom">
              <p>
                All rights reserved @ tuvoznow 2023
              </p>
              <div className="social">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
