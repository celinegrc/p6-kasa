import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import styles from  './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <img src= { logo } alt ='logo de kasa'/>
            <nav>
            <NavLink to="/"  className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
            Accueil
          </NavLink>
          <NavLink  to="/a-propos" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
            A propos
          </NavLink>
            </nav>
    </div>
  )
}

export default Header


