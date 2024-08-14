import React, { useState, useEffect } from 'react';

const recipesPageStyles = {
  recipesPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
  },
  recipesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', // Reduced minimum width
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    position: 'relative',
    minWidth: '220px', // Reduced width
  },
  cardImageWrapper: {
    position: 'relative',
    margin: '0', 
    padding: '0',
  },
  cardImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0', // Only top corners rounded
    margin: '0', 
    padding: '0',
  },
  cardContent: {
    padding: '10px', // Added padding around the text content
  },
  mealType: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    zIndex: 1,
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '10px 0 5px',
  },
  cardInfo: {
    fontSize: '12px',
    margin: '5px 0',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  cardCategory: {
    fontSize: '12px',
    color: 'gray',
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '2px 5px',
    borderRadius: '4px',
  },
  cardRatingWrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0',
  },
  cardRating: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#ffcc00',
    marginLeft: '10px',
  },
  profilePicture: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  },
};

const RecipeCard = ({ name, info, category, image, rating, mealtype }) => (
  <div style={recipesPageStyles.card}>
    <div style={recipesPageStyles.cardImageWrapper}>
      <img src={image} alt={name} style={recipesPageStyles.cardImage} />
      <div style={recipesPageStyles.mealType}>{mealtype}</div>
      <div style={recipesPageStyles.cardCategory}>Category: {category}</div>
    </div>
    <div style={recipesPageStyles.cardContent}> {/* Added a wrapper for the content */}
      <h3 style={recipesPageStyles.cardTitle}>{name}</h3>
      <p style={recipesPageStyles.cardInfo}>{info}</p>
      <div style={recipesPageStyles.cardRatingWrapper}>
        <img
          src="https://9f8rj0jed1.execute-api.us-east-1.amazonaws.com/images/profile_img.png"
          alt="Profile"
          style={recipesPageStyles.profilePicture}
        />
        <p style={recipesPageStyles.cardRating}>Rating: {rating}</p>
      </div>
    </div>
  </div>
);

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(result => setData(result.recipes))
      .catch(err => console.error('Error fetching recipes:', err));
  }, []);

  return (
    <div style={recipesPageStyles.recipesPage}>
      <div style={recipesPageStyles.recipesGrid}>
        {data.map(item => (
          <RecipeCard
            key={item.id}
            name={item.name}
            info={item.description}
            category={item.cuisine}
            image={item.image}
            rating={item.rating}
            mealtype={item.mealtype}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
