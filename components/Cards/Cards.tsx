import React from 'react';
import Card from '../Card/Card';
import { CardType } from '@/types/card';

interface Props {
  cards: CardType[];
}

const Cards: React.FC<Props> = ({ cards }) => {
  return (
    <>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
}

export default Cards;
