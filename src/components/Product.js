import React, { useState, useContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import styled from 'styled-components';
import { FaSearch, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import axios from 'axios';

const Product = ({ image_url, name, price, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const [flashMessage, setFlashMessage] = useState('');

  // fetch user data from token
  const fetchUserData = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken);
        const user = JSON.parse(atob(token.split('.')[1]));
        // console.log(user);
        setUserData({ ...user, id: decodedToken.userId });
      } catch (error) {
        console.log('Invalid token:', error);
        localStorage.removeItem('token');
      }
    }
  };

  const checkIfFavorite = async () => {
    const token = localStorage.getItem('token');
    if (!token || !userData) return;

    try {
      const response = await axios.get(
        // `http://localhost:3001/users/favorites/check/${id}`,
        `https://backend-copy-v28b.onrender.com/users/favorites/check/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsFavorite(response.data.isFavorite);
    } catch (error) {
      console.log('Error checking favorite status:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
    checkIfFavorite();
  }, []);

  // toggle favorite
  const toggleFavorite = async () => {
    if (!userData) {
      console.log('not logged in');
      setFlashMessage('Please log in to add to favorites');
      setTimeout(() => setFlashMessage(''), 3000);

      return;
    }

    try {
      // const url = 'http://localhost:3001/users/favorites';
      const url = 'https://backend-copy-v28b.onrender.com/users/favorites';

      const headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      };
      const data = { userId: userData.id, productId: id };
      console.log(data);

      if (isFavorite) {
        const response = await axios.delete(url, { headers, data });
        if (response.status === 200) {
          setIsFavorite(false);
          console.log('deleted');
        }
      } else {
        const response = await axios.post(url, data, { headers });
        if (response.status === 200) {
          setIsFavorite(true);
          console.log('added');
        }
      }

      // setIsFavorite((prevIsfavorite) => !prevIsfavorite);
    } catch (error) {
      console.log(error);
      setIsFavorite((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <div className='container'>
        <img src={image_url} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{price}</p>
      </footer>
      <button className='favorite-btn' onClick={toggleFavorite}>
        {isFavorite ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
      </button>
      {flashMessage && <div className='flash-message'>{flashMessage}</div>}
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .container {
    position: relative;
    /* background: var(--clr-black); */
    border-radius: var(--radius);
  }
  img {
    width: 90%;
    max-width: 2000px;

    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  .favorite-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    top: 1rem;
    right: 1rem;
    color: var(--clr-primary-5);
    font-size: 1rem;
  }
`;

export default Product;
