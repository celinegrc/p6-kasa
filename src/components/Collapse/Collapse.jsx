import styles from './Collapse.module.css'
import { useState } from "react";
import arrow_open from '../../assets/images/arrow_open.png'
import arrow_close from '../../assets/images/arrow_close.png'

function Collapse({collapseTitle , collapseDescription}){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className={styles.collapse_container}>
            <div  onClick={() => setIsOpen(prevState => !prevState)} className={styles.collapse_title}>
                {collapseTitle}
                <img  src = { isOpen ? arrow_close : arrow_open}
                alt='' />
            </div>
            {isOpen && (
            <div className={styles.collapse_description}>
                <div>{collapseDescription}</div>
            </div>)}
        </div>
    )
}


export default Collapse;