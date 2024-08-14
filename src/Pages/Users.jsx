// debugger
import React, { useState, useEffect } from 'react';

const usersPageStyles = {
  usersPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
    width: '100%',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Adjusted minimum width for smaller cards
    gap: '10px',
    width: '100%',
  },
  userCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '250px', // Reduced width
    position: 'relative',
  },
  cardImgTop: {
    width: '100%',
    height: '150px', // Reduced height
    borderRadius: '8px 8px 0 0',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: '16px', // Reduced font size
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: '5px', // Reduced margin
  },
  cardText: {
    fontSize: '12px', // Reduced font size
    margin: '2px 0', // Adjusted margin
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardDetails: {
    fontSize: '12px', // Reduced font size
    margin: '5px 40px',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  detailsSeparator: {
    margin: '0 5px',
  },
  profileIcon: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    width: '30px', // Reduced width
    height: '30px', // Reduced height
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid #fff',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
  },
  profileIconImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};


const UserCard = ({ id, name, age, gender, email, image }) => {

  const profileIconUrl = 'https://9f8rj0jed1.execute-api.us-east-1.amazonaws.com/images/profile_img.png';

  return (
    <div style={usersPageStyles.userCard}>
      <img src={image} alt={name} style={usersPageStyles.cardImgTop} />
      <div style={usersPageStyles.cardBody}>
        <h2 style={usersPageStyles.cardTitle}>{name}</h2>
        <p style={usersPageStyles.cardText}>Email: {email}</p>
        <p style={usersPageStyles.cardDetails}>
          Age: {age}
          <span style={usersPageStyles.detailsSeparator}> | </span>
          Gender: {gender}
        </p>
      </div>
      <div style={usersPageStyles.profileIcon}>
        <img src={profileIconUrl} alt="Profile Icon" style={usersPageStyles.profileIconImg} />
      </div>
    </div>
  );
};

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(result => setData(result.users))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div style={usersPageStyles.usersPage}>
      <div style={usersPageStyles.gridContainer}>
        {data.length > 0 ? (
          data.map(item => (
            <UserCard
              key={item.id}
              id={item.id}
              name={item.firstName + ' ' + item.lastName}
              age={item.age}
              gender={item.gender}
              email={item.email}
              image={item.image || 'default-image-url'}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Users;
// import React from 'react'

// export default function Users() {
//   return (
//     <div style={{height:'100vh',background:'red'}}>
//       <h1>style</h1>
//     </div>
//   )
// }
