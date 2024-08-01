import Header from 'components/Header';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <section className={ styles.container }>
      <Header />
    </section>
  );
}