import styles from './APropos.module.css'
import Collapse from '../../components/Collapse/Collapse.jsx';
import collapseData from '../../datas/collapseData.js'

function APropos() {
    return (
        <div className={styles.a_propos_container}>
            <div className={styles.banniere}></div>
            <div className={styles.collapses_container}>
                {collapseData.map(({title, description},index) => (
                <Collapse  key = {`${title}-${index}`} collapseTitle= {<p>{title}</p>} collapseDescription = {description}/>)
                )}
            </div> 
        </div>
    );
}

export default APropos;
