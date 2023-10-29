import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const { userData, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <Wrapper>
      {userData ? (
        <div>
          {/* <span>Welcome, {userData.username}</span> */}
          <button className='logout-btn' onClick={handleLogout}>
            Logout{' '}
          </button>
        </div>
      ) : (
        <div>
          <Link className='navigation' to='/auth'>
            Register/Login
          </Link>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1rem 3rem;
  background: var(--clr-grey-3);

  .navigation {
    color: var(--clr-grey-9);
    text-decoration: none;
    font-weight: bold;
    letter-spacing: var(--spacing);
  }
  .logout-btn {
    background: var(--clr-primary-5);
    color: var(--clr-white);
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius);
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    margin-left: 2rem;
  }
`;

export default Header;
