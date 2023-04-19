import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import styles from  './Header.module.css'

function Header() {
    return (
      <div className={styles.header_container}>
        <header className={styles.header}>
            <div className={styles.image_container}><img src= { logo } alt ='logo de kasa'/></div>
            <nav>
            <NavLink to="/"  className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
            Accueil
          </NavLink>
          <NavLink  to="/a-propos" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
            A propos
          </NavLink>
            </nav>
    </header>
    </ div>
  )
}

export default Header



