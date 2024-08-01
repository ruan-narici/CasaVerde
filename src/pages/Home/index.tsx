import Header from 'components/Header';
import styles from './Home.module.scss';
import Decoration from 'components/Decoration';

export default function Home() {
  return (
    <section className={ styles.container }>
      <Decoration />
      <Header />
    </section>
  );
}