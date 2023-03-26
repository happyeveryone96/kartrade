import React from 'react';
import Card from '../Card/Card';

function Cards({ cards }: any) {
  console.log(cards);

  return (
    <>
      {cards.map((card: any) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
}

export default Cards;
