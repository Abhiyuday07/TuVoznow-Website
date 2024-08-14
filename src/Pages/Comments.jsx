import React, { useState, useEffect } from 'react';

const commentsPageStyles = {
  commentsPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
    width: '100%',
  },
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
    display: 'flex', // Align profile icon and content side by side
    alignItems: 'center',
  },
  cardBody: {
    marginLeft: '15px', // Add space between the icon and the text content
    flex: 1,
  },
  cardFullName: {
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'left',
    margin: '0 0 5px 0', // Reduce the margin to keep it closer to the icon
  },
  cardText: {
    fontSize: '14px',
    margin: '0', // Remove margins to keep it close to the title
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2', // Limit to 2 lines
    WebkitBoxOrient: 'vertical',
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '10px',
  },
  profileIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid #fff',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
    flexShrink: 0,
  },
  profileIconImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

const CommentCard = ({ fullname, body,username}) => {
  const profileIconUrl = 'https://9f8rj0jed1.execute-api.us-east-1.amazonaws.com/images/profile_img.png';

  return (
    <div style={commentsPageStyles.card}>
      <div style={commentsPageStyles.profileIcon}>
        <img src={profileIconUrl} alt="Profile Icon" style={commentsPageStyles.profileIconImg} />
      </div>
      <div style={commentsPageStyles.cardBody}>
        <div style={commentsPageStyles.cardFullName}>{fullname}</div>
        <div style={commentsPageStyles.cardText}>{body}</div>
        <div style={commentsPageStyles.cardFooter}>
          <span style={commentsPageStyles.cardText}>username:{username}</span>
          {/* <span style={commentsPageStyles.cardText}>Likes: {likes}</span> */}
        </div>
      </div>
    </div>
  );
};

const Comments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then(res => res.json())
      .then(result => setData(result.comments))
      .catch(err => console.error('Error fetching comments:', err));
  }, []);

  return (
    <div style={commentsPageStyles.commentsPage}>
      <div style={commentsPageStyles.list}>
        {data.length > 0 && 
          data.map(item => (
            <CommentCard
              key={item.id}
              fullname={item.user.fullName}
              body={item.body}
              username={item.user.username}
              // likes={item.likes}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Comments;
