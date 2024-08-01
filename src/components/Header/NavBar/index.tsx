import { Link } from 'react-router-dom';
import stlyes from './NavBar.module.scss';

function NavBar() {
  return (
    <nav>
      <ul className={ stlyes.list }>
        <li>Como fazer</li>
        <li>Ofertas</li>
        <li>Depoimentos</li>
        <li>Vídeos</li>
        <li>Meu carrinho</li>
      </ul>
    </nav>
  );
}

export default NavBar;