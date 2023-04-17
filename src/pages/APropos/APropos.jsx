import Header from '../../components/Header/Header.jsx'
import styles from './APropos.module.css'
import Collapse from '../../components/Collapse/Collapse.jsx';
import collapseData from '../../datas/collapseData.js'

function APropos() {
    return (
        <div className={styles.a_propos_container}>
            <Header />
            {collapseData.map(({title, description}) => (
            <Collapse collapseTitle={title}  collapseDescription = {description}/>)
            )}
            </div>
    );
}

export default APropos;