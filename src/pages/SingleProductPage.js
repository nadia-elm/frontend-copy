import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageHero } from '../components';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const url = `https://course-api.com/react-store-single-product?id=`;
const url = 'http://localhost:3001/products/';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const result = await axios.get(`${url}${id}`);
      setProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    console.log(product);
  }, [id]);

  if (product === null) {
    return <p>Loading...</p>;
  }

  const {
    name,
    price,
    description,

    id: sku,
    company,
    image_url,
  } = product;
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <img src={image_url}></img>
          <section className='content'>
            <h2>{name}</h2>

            <h5 className='price'>{price}</h5>
            <p className='desc'>{description}</p>
            <p className='info'></p>
            <p className='info'>
              <span>SKU :</span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand :</span>
              {company}
            </p>
            <hr />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
