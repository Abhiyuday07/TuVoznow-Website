// import React, { useState } from 'react';
import React from 'react';
import TopVoices from '../Components/TopVoices';
// import googlePlayIcon from './assets/images/google-play-icon.png';
// import appStoreIcon from './assets/images/app-store-icon.png';
const Home = () => {
  
  // const [activeTab, setActiveTab] = useState('London');

  // const openCity = (event, cityName) => {
  //   setActiveTab(cityName);
  // };
const a=[
  {title:'London',id:1},

]
  return (
    <div>
      <section className="sectionsRow heroBg" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <h1 className="title">Discover the truth.</h1>
              <p>
                Safely discover or share what's really happening in your<br />
                local community or around the world.
              </p>
              <div className="storeImg">
                <img src="./assets/images/google-play1.png" alt="Google Play Store icon" />
                <img src="./assets/images/app-store 1.png" alt="App Store icon" />
              </div>
              <div className="homeSearchForm">
                <div className="input-group">
                  <div className="form-outline">
                    <input
                      type="search"
                      id="form1"
                      placeholder="Search TuVozNow"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form1"></label>
                    <button type="button" className="btn">
                      <span className="search"><i className="fas fa-search"></i></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 rightMobileImg">
              <img src="./assets/images/rightSideImgMobile.png" />
            </div>
          </div>
        </div>
      </section>




      <TopVoices/>
      
      
      
      {/* <!-- <section className="sectionsRow">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp titleSection">
            <h1 className="titleHeader01">
              Top <span style="color: #40c74f">10 Voices</span> Worldwide
            </h1>
            <a href="viewMore">View More</a>
          </div>
          <div className="col-lg-3 wow fadeInUp" style="text-align: left">
            <div className="card">
              <img src="images/waterDrop.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Water Drop</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" style="text-align: left">
            <div className="card">
              <img src="images/EarthSpace.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Earth Space Sound</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" style="text-align: left">
            <div className="card">
              <img
                src="images/HappyBirthday.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Happy Birthday</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" style="text-align: left">
            <div className="card">
              <img
                src="images/DemoBackground.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Demo Background Sample</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sectionsRow">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp titleSection">
            <h1 className="titleHeader01">Popular Voices</h1>
            <a href="viewMore">View More</a>
          </div>
          <div className="col-lg-3 wow fadeInUp mt-1" style="text-align: left">
            <div className="card">
              <img
                src="images/bearmorning.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Bear morning</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp mt-1" style="text-align: left">
            <div className="card">
              <img
                src="images/DancingMusic.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Dancing Music</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp mt-1" style="text-align: left">
            <div className="card">
              <img
                src="images/KeyboardSound.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Keyboard Sound</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp mt-1" style="text-align: left">
            <div className="card">
              <img src="images/BirdSound.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bird Sound</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp mt-1" style="text-align: left">
            <div className="card">
              <img
                src="images/bearmorning.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Bear morning</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp mt-1" style="text-align: left">
            <div className="card">
              <img
                src="images/DancingMusic.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Dancing Music</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp mt-1" style="text-align: left">
            <div className="card">
              <img
                src="images/KeyboardSound.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Keyboard Sound</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp mt-1" style="text-align: left">
            <div className="card">
              <img src="images/BirdSound.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bird Sound</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="views">
                  <span>1.6k Views </span> |
                  <span> 1 years ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> --> */}

      <section className="sectionsRow ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="titleHeader01 left"> Features we provide</h2>
              <div className="features">
                <div className="feature_box">
                  <span>
                    <img src="./assets/images/phone.svg" />
                    <p>Calling with friends</p>
                  </span>
                  <span>
                    <img src="./assets/images/message.svg" />
                    <p>Chat with friends</p>
                  </span>
                  <span>
                    <img src="./assets/images/video.svg" />
                    <p>Video calling with friends </p>
                  </span>
                  <span>
                    <img src="./assets/images/liveNow.svg" />
                    <p>Live streaming with friends </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 rightMobileImg">
              <img src="./assets/images/feature.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="sectionsRow ptb-80 appSetup">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 centerAlign">
              <h2 className="titleHeader01">How Tuvoznow works?</h2>
              <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>

            </div>
            <div className="col-lg-12">
              <img src="./assets/images/howitworks.svg" />
            </div>
          </div>
        </div>
      </section>

      <section className="sectionsRow screenshorts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 centerAlign">
              <h2 className="titleHeader01">Simple & Beautiful Interface</h2>
              <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner ">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="sliderIt">
                        <img src="./assets/images/slide-1.png" alt="Notebook" style={{ width: "100%" }} />
                      </div>
                      <div className="sliderIt">
                        <img src="./assets/images/slide-2.png" alt="Notebook" style={{ width: "100%" }} />
                      </div>
                      <div className="sliderIt">
                        <img src="./assets/images/slide-3.png" alt="Notebook" style={{ width: "100%" }} />
                      </div>
                      <div className="sliderIt">
                        <img src="./assets/images/slide-4.png" alt="Notebook" />
                      </div>
                      <div className="sliderIt">
                        <img src="./assets/images/slide-5.png" alt="Notebook" style={{ width: "100%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <button onClick={topFunction()} id="myBtn" title="Go to top">
        <img src="./assets/images/topArrow.svg" />
      </button> */}


      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Log in to TuVozNow</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                  <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
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
export default Home;
