import logo_footer from '../../assets/images/logo_footer.png'
import all_rights from '../../assets/images/all_rights_reserved.png'
import styles from './Footer.module.css'


function Footer() {
    return(
        <div className ={styles.footer}>
            <img src= { logo_footer } alt ='logo de kasa'/>
            <img src= { all_rights} alt ='logo de kasa'/>
        </div>
    )
}

export default Footer