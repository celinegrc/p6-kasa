import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import styles from  './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <img src= { logo } alt ='logo de kasa'/>
            <nav>
                <Link to="/" className = {styles.nav_item}>Accueil</Link>
                <Link to="/a-propos" className = {styles.nav_item} > A propos </Link>
            </nav>
    </div>
  )
}

export default Header



