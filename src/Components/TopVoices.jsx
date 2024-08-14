import React, { useState } from 'react';
import './TopVoices.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './TopVoices.css';
const videos = {
  trending: [
    // { id: 1, src: "https://www.tuvoznow.com/embed/ebXoudz1bqS", title: "Trending Title 1", description: "Description 1", location: "Location 1" },
    // { id: 2, src: "https://www.tuvoznow.com/embed/od55pMJ3Fea", title: "Trending Title 2", description: "Description 2", location: "Location 2" },
    { id: 3, src: "https://www.tuvoznow.com/embed/R_sIfVK243q", title: "Ants", description: "", location: "29 Views | 4 months ago" },
    { id: 4, src: "https://www.tuvoznow.com/embed/I8iAAjxrJgj", title: "Bike Ride", description: "The Witches bike ride", location: "403 Views | 7 months ago" },
    { id: 5, src: "https://www.tuvoznow.com/embed/N2mmQCzyO3e", title: "Airplane On Its Flight", description: "It's the views of the world below me that stay in my mind.", location: "144 Views | a year ago" },
    { id: 6, src: "https://www.tuvoznow.com/embed/oLUdxYA1ldF", title: "Cayman", description: "Feel the breeze, embrace the peace", location: "45 Views | 5 months ago" },
    { id: 7, src: "https://www.tuvoznow.com/embed/MDWNKi9XpBu", title: "10 Most Beautiful Peacocks in the World ", description: "Just like a peacock spreading its feathers, let joy and positivity radiate from within you.", location: "67 Views | 5 months ago" },
    { id: 8, src: "https://www.tuvoznow.com/embed/N2mmQCzyO3e", title: "Airplane On Its Flight", description: "It's the views of the world below me that stay in my mind.", location: "143 Views | a year ago" },
    { id: 9, src: "https://www.tuvoznow.com/embed/BtsEfTyYvOU", title: "Glance out my visit to Om Beach in Gokarna, Karnataka", description: "Feel the soft sand between your toes and the warm sun on your skin as you take in the endless blue of the sea.", location: "502 Views | a year ago" },
    { id: 10, src: "https://www.tuvoznow.com/embed/Znxnvcfsj7R", title: "Sound Of Waves", description: "Immerse yourself in the calming rhythm of ocean waves, a peaceful retreat for mind and soul.#waves #beach #nature", location: "1.1K Views | 5 months ago" },
  ],
  popular: [
    { id: 11, src: "https://www.tuvoznow.com/embed/Znxnvcfsj7R", title: "Sound Of Waves", description: "Immerse yourself in the calming rhythm of ocean waves, a peaceful retreat for mind and soul.#waves #beach #nature", location: "1.1K Views | 6 months ago" },
    { id: 12, src: "https://www.tuvoznow.com/embed/npVJGehJJke", title: "Pot Making", description: "Life is just like Potter's Clay it gets shaped by our own hands.", location: "531 Views | 3 months ago" },
    { id: 13, src: "https://www.tuvoznow.com/embed/Cltx5Giy0ce", title: "Sculpting Techinique", description: "Sculpting is the best comment that any painter can make on painting.", location: "467 Views | 3 months ago" },
    { id: 14, src: "https://www.tuvoznow.com/embed/MVTBn_Ttllz", title: "Gift Boxing and Wrapping", description: "The Perfect Presents, Wrapped with Care.", location: "375 Views | 3 months ago" },
    { id: 15, src: "https://www.tuvoznow.com/embed/8Gv7UXDVDmA", title: "Popular Title 5Painting Ideas", description: "I found I could say things with colours and shapes that I couldn't say any other way—things I had no words for", location: "271 Views | 3 months ag" },
    { id: 16, src: "https://www.tuvoznow.com/embed/CTndvILJMlW1", title: "Flipping Page of The Adventures of Huckleberry Finn", description: "A book is a gift that you can open again and again.", location: "249 Views | a year ago" },
    { id: 17, src: "https://www.tuvoznow.com/embed/HtbzIZD0BlY", title: "Welcome to TuVzNow", description: "Welcome to TuVozNow! Learn how to enter our $500 giveaway by watching this video.", location: "371 Views | a month ago" },
    { id: 18, src: "https://www.tuvoznow.com/embed/7eMQ0epkDo0", title: "Coastal View", description: "Drone footage of coastal view during sunset.", location: "172 Views | a year ago" },
    // { id: 19, src: "https://www.tuvoznow.com/embed/js9QD3PkcVm", title: "Popular Title 9", description: "Description 9", location: "Location 9" },
    // { id: 20, src: "https://www.tuvoznow.com/embed/CTndvILJMlW1", title: "Popular Title 10", description: "Description 10", location: "Location 10" },
  ],
  top10: [
    { id: 21, src: "https://www.tuvoznow.com/embed/ORM373RmSo6", title: "Ridding away from my problem", description: "In order to find peace, you must escape from the chaos of everyday life", location: "54 Views | 3 months ago" },
    { id: 22, src: "https://www.tuvoznow.com/embed/tumewpHxK08", title: "Never ending love for Butterflies", description: "Butterflies flying in Houston Butterfly Museum.", location: "207 Views | 3 months ago" },
    { id: 23, src: "https://www.tuvoznow.com/embed/SpKOuvBk_Hh", title: "Mardi Gras 2024", description: "", location: "28 Views | 5 months ago" },
    { id: 24, src: "https://www.tuvoznow.com/embed/8ysG_KfJiVP", title: "GOLDEN TEMPLE _ AMRITSAR", description: "Speechless looking at the divine Golden Temple! My heart skipped a beat looking at this view!", location: "28 Views | 2 months ago" },
    { id: 25, src: "https://www.tuvoznow.com/embed/Jb41wwuEpfr", title: "Shivaji Maharaj Birthday Celebration🚩", description: "Captured drone video of Shivaji Maharaj's birthday celebration", location: "56 Views | 2 months ago" },
    { id: 26, src: "https://www.tuvoznow.com/embed/JcZjpUuO1mU", title: "Hard To Find 8 Shot Revolver", description: "", location: "25 Views | a month ago" },
    { id: 27, src: "https://www.tuvoznow.com/embed/3eWPAAeb6J8", title: "Sunlight through leaves", description: "Sharing my videography of sunlight through leaves", location: "33 Views | 5 months ago" },
    { id: 28, src: "https://www.tuvoznow.com/embed/Bm0BmvMnIR3", title: "Golf", description: "Need Some Lessons", location: "47 Views | 3 months ago" },
    // { id: 29, src: "https://www.tuvoznow.com/embed/8ysG_KfJiVP", title: "Top 10 Title 9", description: "Description 9", location: "Location 9" },
    // { id: 30, src: "https://www.tuvoznow.com/embed/VWuP4rsBPdI", title: "Top 10 Title 10", description: "Description 10", location: "Location 10" },
  ],
};

const TopVoices = () => {
  const [activeSection, setActiveSection] = useState('trending');

  const renderSection = () => {
    return (
      <div className="video-grid">
        {videos[activeSection].map((video) => (
          <div key={video.id} className="video-item">
            <iframe className="tuvoz-now" src={video.src} frameBorder="0" allowFullScreen title={video.title}></iframe>
            <div className="video-details">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <p className="video-location">{video.location}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <section className="sectionsRow">
        <div className="container mx-auto p-4">
          <div className="row">
            <div className="col-lg-12 centerAlign text-center">
              <h2 className="titleHeader01 text-3xl font-bold mb-4">Best Voices</h2>
              <div className="button-group mb-4">
                <button
                  className={`px-4 py-2 mr-2 ${activeSection === 'trending' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-gray-800'} rounded`}
                  onClick={() => setActiveSection('trending')}
                >
                  Trending
                </button>
                <button
                  className={`px-4 py-2 mr-2 ${activeSection === 'popular' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-gray-800'} rounded`}
                  onClick={() => setActiveSection('popular')}
                >
                  Popular
                </button>
                <button
                  className={`px-4 py-2 ${activeSection === 'top10' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-gray-800'} rounded`}
                  onClick={() => setActiveSection('top10')}
                >
                  Top 10
                </button>
              </div>
              <div className="section-content">
                {renderSection()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopVoices;
