import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import styles from  './Header.module.css'

function Header() {
    return (
      <div className={styles.header_container}>
        <header className={styles.header}>
          <div className={styles.image_container}>
            <Link to="/">
              <img src= { logo } alt ='logo de kasa'/>
            </Link>
          </div>
          <nav>
             {/* Liens de navigation pour la page d'accueil et la page à propos */}
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



