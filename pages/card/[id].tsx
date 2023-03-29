import React from 'react';
import { CardType } from '@/types/card';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import css from './card.module.css';
import UserBox from '@/components/UserBox/UserBox';
import CardDetailDesc from '@/components/CardDetailDesc/CardDetailDesc';
import CardDetailImage from '@/components/CardDetailImage/CardDetailImage';
import Quantity from '@/components/Quantity/Quantity';

function CardDetail({
  cards,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const cardId = Number(router.query.id);
  const card = [cards.filter((card) => card.id === cardId)][0][0];
  const { mainImage, nickname, title, description, price, detailImage } = card;
  const photoCard = mainImage.replace('/public', '');

  return (
    <div className={css.main}>
      <Header />
      <Nav />
      <UserBox props={{ userImg: photoCard, userName: nickname }} />
      <CardDetailDesc props={{ title, description, price }} />
      <CardDetailImage props={{ detailImage }} />
      <Quantity />
    </div>
  );
}

export default CardDetail;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/cards');
  const cards: CardType[] = await res.json();

  return { props: { cards } };
}
