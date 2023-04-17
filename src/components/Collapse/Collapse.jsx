import styles from './Collapse.module.css'
import dropdown_collapse from '../../assets/images/dropdown_collapse.png'

function Collapse({collapseTitle , collapseDescription}){
    return(
        <div className={styles.collapse_container}>
            <div className={styles.collapse_title}>
                {collapseTitle}
                <img src ={dropdown_collapse} alt='' />
            </div>
            <div className={styles.collapse_description}>
                {collapseDescription}
            </div>
        </div>
    )
}


export default Collapse;