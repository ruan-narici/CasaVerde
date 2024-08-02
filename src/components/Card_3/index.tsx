import styles from './Card_3.module.scss';
import ItemCard from './ItemCard';

function Card_3() {
  return (
    <section className={ styles.container }>
      <h3 className={ styles.container__subtitle }>Conheça nossas</h3>
      <h1 className={ styles.container__title }>ofertas</h1>
      <div className={ styles.container__items }>
        <ItemCard
          title='Ajuga reptans'
          value={20}
          image='assets/img/produto-01.png'/>
        <ItemCard
          title='Cordyline fruticosa'
          value={20}
          image='assets/img/produto-02.png'/>
        <ItemCard
          title='Crassula ovata'
          value={20}
          image='assets/img/produto-03.png'/>
        <ItemCard
          title='Cyperus rotundus'
          value={20}
          image='assets/img/produto-04.png'/>
        <ItemCard
          title='Delairea odorata'
          value={20}
          image='assets/img/produto-05.png'/>
        <ItemCard
          title='Datura metel'
          value={20}
          image='assets/img/produto-06.png'/>
      </div>
    </section>
  );
}

export default Card_3;