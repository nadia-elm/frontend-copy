import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
  const { setUserData } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3001/users/register',
        formData
      );
      if (response.data && response.data.token && response.data.user) {
        setUserData(response.data.user);
        localStorage.setItem('token', response.data.token);
        navigate('/');
      }

      console.log(response.date);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <StyledLabel htmlFor='username'>Username</StyledLabel>
      <input
        type='text'
        id='username'
        name='username'
        onChange={handleChange}
      />

      <StyledLabel htmlFor='password'>Password</StyledLabel>
      <input
        type='password'
        id='password'
        name='password'
        onChange={handleChange}
      />
      <StyledLabel htmlFor='email'>Email</StyledLabel>
      <input type='email' id='email' name='email' onChange={handleChange} />
      <button type='submit'>Register</button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
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
  }

  button {
    background: var(--clr-primary-5);
    color: var(--clr-white);
    padding: 7px;
    border: none;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);

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

export default Register;
