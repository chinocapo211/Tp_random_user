import React from 'react';

const Cards = ({ user }) => {
    return (
        <div style={styles.card}>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} style={styles.image} />
            <div style={styles.info}>
                <h2>{`${user.name.first} ${user.name.last}`}</h2>
                <p>Email: {user.email}</p>
                <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        width: '250px',
        textAlign: 'center',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s'
    },
    image: {
        borderRadius: '50%',
        width: '100px',
        height: '100px'
    },
    info: {
        marginTop: '10px'
    }
};

export default Cards;
