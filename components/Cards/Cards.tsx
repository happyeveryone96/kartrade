import React from 'react';
import Card from '../Card/Card';

function Cards({ cards }: any) {
  return (
    <>
      {cards.map((card: any) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
}

export default Cards;
