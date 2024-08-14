// import React, { useState } from 'react';
// import './Portfolio.css';
// import Users from './Users';
// import Product from './Product';
// import Posts from './Posts';
// import Comments from './Comments';
// import Recipes from './Recipes';
// // import { Outlet } from 'react-router-dom';

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('');

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'users':
//         return <Users />;
//       case 'product':
//         return <Product />;
//       case 'posts':
//         return <Posts />;
//       case 'comments':
//         return <Comments />;
//       case 'recipes':
//         return <Recipes />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="portfolio">  
    {/* header section */}
      {/* <section className="sectionsRow heroBg" id="home">
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
              <img src="./assets/images/rightSideImgMobile.png" alt="Right side mobile" />
            </div>
          </div>
        </div>
      </section> */}
      
      {/* <section className="portfolio-intro">
        <h2 className="titleHeader01">Portfolio</h2>
        <div className="button-group">
          <button
            className={`tab-button ${activeSection === 'users' ? 'active' : ''}`}
            onClick={() => setActiveSection('users')}
          >
            Users
          </button>
          <button
            className={`tab-button ${activeSection === 'product' ? 'active' : ''}`}
            onClick={() => setActiveSection('product')}
          >
            Product
          </button>
          <button
            className={`tab-button ${activeSection === 'posts' ? 'active' : ''}`}
            onClick={() => setActiveSection('posts')}
          >
            Posts
          </button>
          <button
            className={`tab-button ${activeSection === 'comments' ? 'active' : ''}`}
            onClick={() => setActiveSection('comments')}
          >
            Comments
          </button>
          <button
            className={`tab-button ${activeSection === 'recipes' ? 'active' : ''}`}
            onClick={() => setActiveSection('recipes')}
          >
            Recipes
          </button>
        </div>
        {renderSection()}
        {/* <Outlet/> */}
//       </section>
//     </div>
//   );
// };

// export default Portfolio; */}




import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Portfolio.css';
import Users from './Users';
import Product from './Product';
import Posts from './Posts';
import Comments from './Comments';
import Recipes from './Recipes';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <section className="portfolio-intro">
        <h2 className="titleHeader01">Portfolio</h2>
        <div className="button-group">
          <Link to="users" className="tab-button">
            Users
          </Link>
          <Link to="product" className="tab-button">
            Product
          </Link>
          <Link to="posts" className="tab-button">
            Posts
          </Link>
          <Link to="comments" className="tab-button">
            Comments
          </Link>
          <Link to="recipes" className="tab-button">
            Recipes
          </Link>
        
        </div>

        <div className="section-content">
          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="product" element={<Product />} />
            <Route path="posts" element={<Posts />} />
            <Route path="comments" element={<Comments />} />
            <Route path="recipes" element={<Recipes />} />
           
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 