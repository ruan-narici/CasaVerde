import { ReactComponent as IDecoration } from 'assets/img/decoration.svg';
import styles from './Decoration.module.scss';

function Decoration() {
  return (
    <>
      <IDecoration className={ styles.image } />
    </>
  );
}

export default Decoration;