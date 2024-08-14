import React from 'react';

const videoCardStyles = {
  card: {
    cursor: 'pointer',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    width: '100%',
    height: 'auto',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '16px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 8px 0',
  },
  info: {
    fontSize: '14px',
    color: '#555',
  },
  category: {
    fontSize: '12px',
    color: '#999',
  },
};

const VideoCard = ({ id, name, info, category, image, onClick }) => {
  return (
    <div style={videoCardStyles.card} onClick={() => onClick(id)}>
      <img src={image} alt={name} style={videoCardStyles.image} />
      <div style={videoCardStyles.content}>
        <h3 style={videoCardStyles.title}>{name}</h3>
        <p style={videoCardStyles.info}>{info}</p>
        <p style={videoCardStyles.category}>{category}</p>
      </div>
    </div>
  );
};

export default VideoCard;
