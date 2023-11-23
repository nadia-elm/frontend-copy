import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PageHero, Product } from '../components';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const getFavorites = async () => {
      try {
        const result = await axios.get(
<<<<<<< HEAD
          // 'http://localhost:3001/users/favorites',
          `https://backend-copy-v28b.onrender.com/favorites/`,
=======
          // 'http://localhost:3001/users/favorites'
          'https://backend-copy-v28b.onrender.com/favorites',
>>>>>>> 900a8b03e7230266f93c9990fc8477318c9058b0
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFavorites(result.data);
      } catch (error) {
        console.log(error);
        // Handle unauthorized access or other errors
      }
    };

    getFavorites();
  }, [navigate]);

  const removeFavorite = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    try {
<<<<<<< HEAD
      await axios.delete(
        '`https://backend-copy-v28b.onrender.com/favorites/`,',
        {
          data: { productId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
=======
      await axios.delete('https://backend-copy-v28b.onrender.com/favorites',
 {
        data: { productId },
        headers: { Authorization: `Bearer ${token}` },
      });
>>>>>>> 900a8b03e7230266f93c9990fc8477318c9058b0
      setFavorites(favorites.filter((product) => product.id !== productId));
    } catch (err) {
      console.log(err);
      // Handle errors, such as unauthorized access
    }
  };

  return (
    <Wrapper>
      <div className='favorites-container'>
        {favorites.map((product) => (
          <div key={product.id} className='favorite-item'>
            <Product {...product} />
            <button onClick={() => removeFavorite(product.id)}>
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .favorites-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  .favorite-item {
    position: relative;
    border: 1px solid #ddd; /* Add a border for each item */
    padding: 1rem; /* Padding around the content */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  }

  .favorite-item img {
    width: 100%; /* Full width of the container */
    height: 200px; /* Fixed height */
    object-fit: cover; /* Ensure the image covers the area */
    border-radius: 5px; /* Rounded corners for the image */
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ff4081; /* Pink background */
    color: white; /* White text */
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e03570; /* Darker shade on hover */
    }
  }

  @media (min-width: 992px) {
    .favorites-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1170px) {
    .favorites-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default Favorites;
