import styles from './Collapse.module.css'
import { useState } from "react"
import arrow_open from '../../assets/images/arrow_open.png'

function Collapse({collapseTitle , collapseDescription}){
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=>{ 
        setIsOpen(!isOpen)
    }

    return(
        <div className={styles.collapse_container}>
            <div  onClick={handleClick} className={isOpen ?`${styles.collapse_title_open}`:`${styles.collapse_title_closed}` }>
                {collapseTitle}
                <img  src = {arrow_open} className={isOpen ?`${styles.arrow_up}`:`${styles.arrow_down}`}
                alt='ouvrir ou fermer la section' />
            </div>
            {isOpen && (
                <div className={styles.collapse_description}>
                    <div>{collapseDescription}</div>
                </div>
            )}
        </div>
    )
}

export default Collapse