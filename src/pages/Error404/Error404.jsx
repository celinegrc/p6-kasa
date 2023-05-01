import styles from './Error404.module.css'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <div className={styles.error_container}>
            <p className ={styles.error_404}>  404 </p>
            <p className ={styles.error_message}> Oups ! La page que vous demandez n'existe pas. </p>
            <Link className = {styles.link_error} to="/" > Retourner à l'accueil </Link>
        </div>
    )
}

export default Error