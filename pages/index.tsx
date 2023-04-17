import MainCard from '@/components/MainCard/MainCard';
import Sort from '@/components/Sort/Sort';
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
      <Sort />
      <MainCard />
      <Cards cards={cards} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { price } = context.query;
  const res = await fetch('http://localhost:3000/api/cards');
  let data: CardType[] = await res.json();
  if (price === 'lowToHigh') {
    data = data.sort((a, b) => a.price - b.price);
  } else if (price === 'highToLow') {
    data = data.sort((a, b) => b.price - a.price);
  }

  return { props: { data } };
}
