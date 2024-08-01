import Logo from 'components/Logo';
import NavBar from './NavBar';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={ styles.container }>
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;