import styles from './Header.module.sass';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="" className="logo" />
        </header>
    )
}

export default Header;