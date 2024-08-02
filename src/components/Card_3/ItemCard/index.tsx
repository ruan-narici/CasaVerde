import styles from './ItemCard.module.scss';
import { ReactComponent as RightArrow } from 'assets/img/right_arrow.svg';

interface Props {
  title: string,
  value: number,
  image: string
}

function ItemCard( { title, value, image }: Props ) {
  return (
    <div className={ styles.container }>
      <div className={ styles.container__image }>
        <img src={ image } alt={ title } />
      </div>
      <div className={ styles.container__infos }>
        <h2 className={ styles.container__infos__title }>{ title }</h2>
        <p className={ styles.container__infos__currency }>{ value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }</p>
        <p className={ styles.container__infos__buy }>Comprar <RightArrow /></p>
      </div>
    </div>
  );
}

export default ItemCard;