import logo_footer from '../../assets/images/logo_footer.png';
import styles from './Footer.module.css';

function Footer() {
    return(
        <footer className ={styles.footer}>
            <img src= { logo_footer } alt ='logo de kasa'/>
            <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;