import MainCard from '@/components/MainCard/MainCard';
import Filter from '@/components/Filter/Filter';
import Header from '@/components/Header/Header';
import css from '../styles/Home.module.css';
import Card from '@/components/Card/Card';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className={css.main}>
      <Header />
      <Filter />
      <MainCard />
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
  );
}
