import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Cards = props => {

  const cards = props.cards.map((card, index) => (
    <Card
      card={card}
      headline={card.headline}
      img={card.img}
      author={card.author}
      key={index}
    />
  ));

  return (
    <CardsContainer>
      {cards}
    </CardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string,
    author: PropTypes.string
  })
}

export default Cards;