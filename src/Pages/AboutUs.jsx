import React from 'react';

const AboutUs = () => {
  return (
  <div>
    <section className="sectionsRow pb-0 heroBg bgDark allregion">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-lg-5 col-md-5">
            <h2>
              <span>Mission</span>
            </h2>
            <p>
              It is TuVozNow's mission to deliver a secure and private
              multimedia communications platform designed to support the Latino
              community, enabling our users to share their truth with
              communities around the globe.
            </p>
          </div>
          <div className="col-lg-7 col-md-7 ml-auto mission">
            <img src="./assets/images/mission.png" />
          </div>
        </div>
      </div>
    </section>
    <section className="sectionsRow">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp">
            <h1 className="titleHeader01">Our Story</h1>
            <p>
              TuVozNow was founded in 2020, when founder and CEO Melvin Montoya
              conducted research that determined Latinos felt underrepresented
              and misrepresented in the social media landscape. Wanting to
              provide a louder voice to the global Latino community, he gathered
              a team to build and deliver an app that addressed the community’s
              core concerns toward using social media
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-4">
            <div className="iconSection">
              <img src="./assets/images/Safety.png" />
              <h3>Safety</h3>
              <p>
                TuVozNow believes that users should be in control of what they
                share with the world, which is why we are committed to never
                selling personal information. We also believe that truth is
                important, which is why we built the ability for our users to
                post anonymously on our video sharing feature to protect our
                users.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="iconSection">
              <img src="./assets/images/Affordability.png" />
              <h3>Affordability</h3>
              <p>
                TuVozNow recognizes that many people cannot afford to buy the
                latest mobile device. We built our app with the ability to work
                on any iOS or Android smartphone. Our base app will remain free
                to use around the world.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="iconSection">
              <img src="./assets/images/EaseofUse.png" />
              <h3>Ease of Use</h3>
              <p>
                TuVozNow believes complicated technology limits the user
                experience for many. We built an app designed to be clean
                looking and simple to use for everyone from their very first
                use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sectionsRow">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp ">
            <div className="d-flex align-item-center">
              <img src="./assets/images/vision.png"/>
              <h2 style={{paddingLeft: "10px",}}>Our Vision</h2>
            </div>
            <div className="pt-40">
              <p>With uncertainty in privacy amongst the most common social media platform that include breaches in security, sharing/selling of user information (Big Data), and use of cookies and tracking as methods to determine locations of users for content based on location and common searches they've made, it is our vision to offer a different model of integrated social media and communications platform that is focused on end-user security and safety in mind. Knowing the concerns of not only the Latino community, but globally when it comes to concerns of security, TuVozNow aims to rebuild that trust by reshaping the way social media and live streaming of events is done through eliminating speciifc user data collection and security risks naturally, while implementing end-user encryption to ensure secure access to our platform regardless of country.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <button onClick="topFunction()" id="myBtn" title="Go to top">
      <img src="./assets//images/topArrow.svg" />
    </button> */}
    

    {/* <!-- Modal --> */}
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Log in to TuVozNow
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your username"
                />
                {/* <!-- <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Show Password</label
                >
              </div>
              <div className="form-group">
                <a href="">Forgot password</a>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Log In
              </button>
              <div className="form-group">
                Don't have an account? <a href="">Sign Up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
  );
};

export default AboutUs;
