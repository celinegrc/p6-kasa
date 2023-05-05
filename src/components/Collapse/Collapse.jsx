import styles from './Collapse.module.css'
import { useState } from "react"
import arrow from '../../assets/images/arrow_close.png'

function Collapse({collapseTitle , collapseDescription}){
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=>{
         // Inversion de la valeur de isOpen (true devient false et inversement)
        setIsOpen(!isOpen)
    }

    return(
        <div className={styles.collapse_container}>
            <div  onClick={handleClick} className={isOpen ?`${styles.collapse_title_open}`:`${styles.collapse_title_closed}` }>
                {collapseTitle}
                <img  src = {arrow} className={isOpen ?`${styles.arrow_up}`:`${styles.arrow_down}`}
                alt='ouvrir ou fermer la section' />
            </div>
             {/* Affichage de la description seulement si isOpen est true */}
            {isOpen && (
                <div className={styles.collapse_description}>
                    <div>{collapseDescription}</div>
                </div>
            )}
        </div>
    )
}

export default Collapse
