import React, { useState, useEffect } from 'react';

const productPageStyles = {
  productPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
    width: '100%',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'left',
    cursor: 'pointer',
    minWidth: '240px', // Increased width
    maxWidth: '240px', // Increased width
    marginRight: '10px',
    marginBottom: '20px', 
    padding: '10px', // Added padding between text and card
    flexShrink: 0,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '160px', // Adjusted height
    objectFit: 'cover',
    borderRadius: '8px',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  cardInfo: {
    fontSize: '12px',
    margin: '10px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardInfoInline: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardCategory: {
    fontSize: '13px',
    color: 'gray',
    position: 'absolute',
    bottom: '85px',
    right: '10px',
    padding: '5px',
    borderRadius: '4px',
  },
};

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(result => setData(result.products))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div style={productPageStyles.productPage}>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {data.map(item => (
            <div key={item.id} style={productPageStyles.card}>
              <img src={item.images[0]} alt={item.title} style={productPageStyles.cardImage} />
              <h3 style={productPageStyles.cardTitle}>{item.title}</h3>
              <p style={productPageStyles.cardInfo}>
                {item.description.length > 100 ? item.description.slice(0, 100) + '...' : item.description}
              </p>
              <div style={productPageStyles.cardInfoInline}>
                <span>Price: ${item.price}</span>
                <span>Rating: {item.rating}</span>
              </div>
              <p style={productPageStyles.cardCategory}>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
