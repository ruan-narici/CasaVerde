import Header from 'components/Header';
import styles from './Home.module.scss';
import Decoration from 'components/Decoration';
import Card_1 from 'components/Card_1';
import Card_2 from 'components/Card_2';
import Card_3 from 'components/Card_3';

export default function Home() {
  return (
    <section className={ styles.container }>
      <Decoration />
      <Header />
      <Card_1 />
      <Card_2 />
      <Card_3 />
    </section>
  );
}