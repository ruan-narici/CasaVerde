import usePlants from 'state/hooks/usePlants';
import styles from './Card_3.module.scss';
import ItemCard from './ItemCard';
import useGETPlants from 'state/hooks/useGETPlants';

function Card_3() {
  const plants = usePlants();
  const getPlants = useGETPlants();
  getPlants();

  return (
    <section className={ styles.container }>
      <h3 className={ styles.container__subtitle }>Conheça nossas</h3>
      <h1 className={ styles.container__title }>ofertas</h1>
      <div className={ styles.container__items }>
        { plants.map((plant) => (
          <ItemCard
            key={ plant.ordem }
            title={ plant.name }
            value={ plant.preco }
            image={ 'assets/img/' + plant.img + '.png' }/>
        )) }
      </div>
    </section>
  );
}

export default Card_3;