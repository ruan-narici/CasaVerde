import Header from 'components/Header';
import styles from './Home.module.scss';
import Decoration from 'components/Decoration';
import Card_1 from 'components/Card_1';

export default function Home() {
  return (
    <section className={ styles.container }>
      <Decoration />
      <Header />
      <Card_1 />
    </section>
  );
}