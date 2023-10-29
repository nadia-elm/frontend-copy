import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroBg from '../assets/green-furniture.jpg';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='img-container'>
        <img src={heroBg} alt='' className='main-img' />
      </article>
      <article className='content'>
        <h2>design your comfy home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quos amet
          perferendis modi illo delectus maiores perspiciatis adipisci itaque
          quibusdam, ipsa eius! Odio dolore a obcaecati, numquam iure quo saepe
          recusandae sit velit repellendus facilis architecto dignissimos!
          Dolorem, itaque vero?
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h2 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 650px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    /* .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    } */
    /* .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    } */
  }
`;

export default Hero;
