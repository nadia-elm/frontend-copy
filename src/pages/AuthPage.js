import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import styled from 'styled-components';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Wrapper>
      {isLogin ? <Login /> : <Register />}
      <p>
        {isLogin ? `Don't have an account?` : `Already a member ?`}
        <button onClick={() => setIsLogin(!isLogin)}>
          {' '}
          {isLogin ? `Register` : `Login`}
        </button>
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 28rem;
  margin: auto;
  padding: 2rem;
  border-radius: var(--radius);
  background: white;
  text-align: center;
  p {
    margin-top: 2rem;
  }
  button {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
  }
`;

export default AuthPage;
