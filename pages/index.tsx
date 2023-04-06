import MainCard from '@/components/MainCard/MainCard';
import Filter from '@/components/Filter/Filter';
import css from '../styles/Home.module.css';
import Cards from '@/components/Cards/Cards';
import { InferGetServerSidePropsType } from 'next';
import { CardType } from '@/types/card';

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const cards = data;

  return (
    <div className={css.main}>
      <Filter />
      <MainCard />
      <Cards cards={cards} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/cards');
  const data: CardType[] = await res.json();

  return { props: { data } };
}
