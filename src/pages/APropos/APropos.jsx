import styles from './APropos.module.css'
import Collapse from '../../components/Collapse/Collapse.jsx'
import collapseData from '../../datas/collapseData.js'

function APropos() {
    return (
        <main className={styles.a_propos_container}>
            <div className={styles.banniere}></div>
            <div className={styles.collapses_container}>
                {collapseData.map(({title, description},index) => (
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
