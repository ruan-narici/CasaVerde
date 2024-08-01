import ImageTree from 'components/ImageTree';
import InputEmail from 'components/InputEmail';
import styles from './Card_1.module.scss';

function Card_1() {
  return (
    <section className={ styles.container }>
      <div>
        <h3 className={ styles.container__subtitle }>Sua casa com as </h3>
        <h1 className={ styles.container__title }>melhores plantas</h1>
        <p className={ styles.container__description }>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        <InputEmail />
      </div>
      <div>
        <ImageTree />
      </div>
    </section>
  );
}

export default Card_1;