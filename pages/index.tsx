import MainCard from '@/components/MainCard/MainCard';
import Filter from '@/components/Filter/Filter';
import Header from '@/components/Header/Header';
import css from '../styles/Home.module.css';
import Footer from '@/components/Footer/Footer';
import Cards from '@/components/Cards/Cards';

export default function Home({ data }: any) {
  return (
    <div className={css.main}>
      <Header />
      <Filter />
      <MainCard />
      <Cards cards={data} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/get-cards`);
  const data = await res.json();

  return { props: { data } };
}
