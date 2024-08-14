import React, { useState, useEffect } from 'react';

const postsPageStyles = {
  postsPage: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    position: 'relative',
    width: '100%',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '15px 0',
    textAlign: 'left',
    position: 'relative',
    display: 'flex', // Use flexbox to arrange the icon and text side by side
    alignItems: 'center',
  },
  cardContent: {
    marginLeft: '15px', // Add space between the icon and the text content
    flex: 1,
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 5px 0', // Reduce the margin to keep it closer to the icon
  },
  cardInfo: {
    fontSize: '14px',
    margin: '0', // Remove margins to keep it close to the title
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2', // Limit to 2 lines
    WebkitBoxOrient: 'vertical',
  },
  profileIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid #fff',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
    flexShrink: 0, // Prevent the icon from shrinking
  },
  profileIconImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardCategory: {
    fontSize: '14px',
    color: 'gray',
    marginTop: '5px',
  },
};

const VideoCard = ({ name, info, category}) => {
  const profileIconUrl = 'https://9f8rj0jed1.execute-api.us-east-1.amazonaws.com/images/profile_img.png';

  return (
    <div style={postsPageStyles.card}>
      <div style={postsPageStyles.profileIcon}>
        <img src={profileIconUrl} alt="Profile Icon" style={postsPageStyles.profileIconImg} />
      </div>
      <div style={postsPageStyles.cardContent}>
        <h2 style={postsPageStyles.cardTitle}>{name}</h2>
        <p style={postsPageStyles.cardInfo}>{info}</p>
        <p style={postsPageStyles.cardCategory}>{category}</p>
      </div>
      <div style={postsPageStyles.reactions}>
        {/* <span style={postsPageStyles.reactionItem}>Likes: {like}</span> */}
      </div>
    </div>
  );
};

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(result => setData(result.posts))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  return (
    <div style={postsPageStyles.postsPage}>
      {data.length > 0 && 
        data.map(item => (
          <VideoCard
            key={item.id}
            name={item.title}
            info={item.body.length > 100 ? item.body.slice(0, 100) + '...' : item.body}
            category={`Tags: ${item.tags ? item.tags.join(', ') : 'N/A'}`}
            // like={item.likes}
          />
        ))
      }
    </div>
  );
};

export default Posts;
