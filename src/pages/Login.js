import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        // 'http://localhost:3001/users/login',
         'https://backend-copy-v28b.onrender.com/users/login',

        formData
      );
      if (response.data && response.data.user && response.data.token) {
        setUserData(response.data.user);
        localStorage.setItem('token', response.data.token);
        navigate('/products');
      }
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // form
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor='username'>Username</StyledLabel>
      <input
        type='text'
        id='username'
        name='username'
        placeholder='Username'
        onChange={handleChange}
      />
      <StyledLabel htmlFor='password'>Password</StyledLabel>
      <input
        type='password'
        id='password'
        name='password'
        placeholder='Password'
        onChange={handleChange}
      />
      <button type='submit'>Login</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 28rem;
  margin: auto;
  margin-top: 5rem;
  background: var(--clr-white);
  padding: var(--spacing);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--dark-shadow);
  }

  input {
    width: calc(100% - 2 * var(--spacing));
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid var(--clr-grey-3);
    border-radius: var(--radius);
    background-color: white;
  }

  button {
    background: var(--clr-primary-5);
    color: var(--clr-white);
    padding: 7px;
    border: none;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    margin-top: 10px;

    &:hover {
      background: var(--clr-primary-7);
    }
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: var(--spacing);
  color: var(--clr-grey-1);
  font-weight: bold;
`;

export default Login;
