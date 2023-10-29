import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero1-furniture.jpg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg}></img>
        <article>
          <div className='title'>
            <h3>our story</h3>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, perferendis iste iusto praesentium accusamus sed autem
            laborum veritatis dolorum rerum hic reprehenderit. Ipsa earum ea
            tempore natus asperiores aut totam dolorem alias, harum doloremque
            ut, fugiat delectus eius nihil reprehenderit ullam repudiandae
            facere. Enim tenetur similique quod corrupti officiis fuga.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
