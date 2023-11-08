import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PageHero, Product } from '../components';

const ProductsPage = ({}) => {
  const [products, setProducts] = useState([]);
  // const url = 'http://localhost:3001/products';
  const url = 'https://backend-copy-v28b.onrender.com/products';

  const getProducts = async (url) => {
    try {
      const result = await axios.get(url);
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts(url);
  }, []);
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          return <Product {...product} key={product.id} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 195px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default ProductsPage;
