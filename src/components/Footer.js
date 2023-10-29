import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy;{new Date().getFullYear()}
        <span> The home Store </span>
      </h5>
      <h5> all rights reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  span {
    color: var(--clr-primary-6);
  }
  h5 {
    color: var(--clr-grey-2);
    margin: 0.1rem;

    font-weight: 700;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
