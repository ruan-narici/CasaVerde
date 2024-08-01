import { ReactComponent as IPlant } from 'assets/img/plant_1.svg';
import styles from './Card_2.module.scss';

function Card_2() {
  return (
    <section className={ styles.container }>
      <div className={ styles.container__card }>
        <div className={ styles.container__card__image }>
          <IPlant />
        </div>
        <div className={ styles.container__card__info }>
          <h3 className={ styles.container__card__subtitle }>Como conseguir </h3>
          <h1 className={ styles.container__card__title }>minha planta</h1>
          <ul className={ styles.container__card__list }>
            <li>Escolha suas plantas</li>
            <li>Faça seu pedido</li>
            <li>Aguarde na sua casa</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Card_2;