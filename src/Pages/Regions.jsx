import React from 'react';

const Regions = () => {
    return (
        <div>
            <section className="sectionsRow pb-100 heroBg bgDark allregion" >
                <div className="container">
                    <div className="row">


                        <div className="col-lg-5 col-md-5 ">
                            <h2>
                                All <span>Regions</span>
                            </h2>
                            <p>Find videos in areas that you're interested in.</p>

                        </div>
                        <div className="col-lg-7 col-md-7 ml-auto">
                            <div className="input-group">
                                <div className="form-outline">
                                    <span className="search"><i className="fas fa-search"></i></span>
                                    <input
                                        type="search"
                                        id="form1"
                                        placeholder="Search TuVozNow"
                                        className="form-control"
                                    />
                                    <label className="form-label" htmlFor="form1"></label>
                                </div>
                                <button type="button" className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionsRow pt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mtb-50">
            <div className="dropdown">
              <button className="btn borderBtn dropdown-toggle" type="button" data-toggle="dropdown">Most Popular
              <span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li><a href="#">Most Popular</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 wow fadeInUp titleSection">
            <h1 className="titleHeader01">
              Top <span style={{color:"#40c74f"}}>10 Voices</span> Worldwide
            </h1>
            <button className="btn view_btn">View More</button>
          </div>

          <div className="col-lg-12">
            <div className="slick-slider d-flex">
              <div className="element element-1">
                <div className="card" >
                  <img src="./assets/images/waterDrop.png" className="card-img-top" alt="..." />
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
              <div className="element element-2">
                <div className="card" >
                  <img
                    src="./assets/images/EarthSpace.png"
                    className="card-img-top"
                    alt="..."
                  />
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
              <div className="element element-3">
                <div className="card" >
                  <img
                    src="./assets/images/HappyBirthday.png"
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
              <div className="element element-4">
                <div className="card" >
                  <img
                    src="./assets/images/DemoBackground.png"
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
            <div className="btn-wrap">
              <img className="prev-btn" src="./assets//images/left_arrow.png"/>
              <img className="next-btn" src="./assets//images/right_arrow.png"/>
            </div>
          </div>

         
        </div>
      </div>
    </section>
            <section className="sectionsRow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 wow fadeInUp titleSection">
                            <h1 className="titleHeader01">Top Voices in Antarctic</h1>
                            <button className="btn view_btn">View More</button>
                        </div>
                        <div className="col-lg-3 wow fadeInUp mt-1" style={{ textAlign: "left", }}>
                            <div className="card" >
                                <img
                                    src="./assets/images/bearmorning.png"
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
                        <div className="col-lg-3 wow fadeInUp mt-1" style={{ textAlign: "left", }}>
                            <div className="card" >
                                <img
                                    src="./assets/images/DancingMusic.png"
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
                        <div className="col-lg-3 wow fadeInUp mt-1" style={{ textAlign: "left", }}>
                            <div className="card" >
                                <img
                                    src="./assets/images/KeyboardSound.png"
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
                        <div className="col-lg-3 wow fadeInUp mt-1" style={{ textAlign: "left", }}>
                            <div className="card" >
                                <img src="./assets/images/BirdSound.png" className="card-img-top" alt="..." />
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
                        <div className="col-lg-3 wow fadeInUp mt-1" style={{ textAlign: "left", }}>
                            <div className="card" >
                                <img
                                    src="./assets/images/bearmorning.png"
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
                        <div className="col-lg-3 wow fadeInUp mt-1" style={{ textAlign: "left", }}>
                            <div className="card" >
                                <img
                                    src="./assets/images/DancingMusic.png"
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
                        <div className="col-lg-3 wow fadeInUp mt-1" style={{ textAlign: "left", }}>
                            <div className="card" >
                                <img
                                    src="./assets/images/KeyboardSound.png"
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
                        <div className="col-lg-3 wow fadeInUp mt-1" style={{ textAlign: "left", }}>
                            <div className="card" >
                                <img src="./assets/images/BirdSound.png" className="card-img-top" alt="..." />
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
            </section >
            {/* <button onclick="topFunction()" id="myBtn" title="Go to top">
      <img src="images/topArrow.svg" />
    </button> */}


            {/* <!-- Modal --> */}
            < div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Log in to TuVozNow        </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username"></input>
                                    {/* <!-- <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                    <label className="form-check-label" htmlFor="exampleCheck1"> Show Password</label>
                                </div>
                                <div className="form-group">
                                    <a href="">Forgot password</a>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Log In</button>
                                <div className="form-group">
                                    Don't have an account? <a href="">Sign Up</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    );
};

export default Regions;
