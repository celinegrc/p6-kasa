import styles from './APropos.module.css'
import Collapse from '../../components/Collapse/Collapse.jsx'
import collapseData from '../../datas/collapseData.js'

function APropos() {
    return (
        <main className={styles.a_propos_container}>
            <div className={styles.banner}></div>
            {/*Affichage de tous les Collapse grâce à la fonction map()*/}
            <div className={styles.collapses_container}>
                {collapseData.map(({title, description},index) => (
                    // Appel du composant Collapse en passant les informations en tant que props
                    <Collapse 
                        key = {`${title}-${index}`} 
                        collapseTitle= {<h2 className={styles.title_collapse_apropos}>{title}</h2>} 
                        collapseDescription = {description}
                    />
                ))}
            </div> 
        </main>
    )
}

export default APropos
