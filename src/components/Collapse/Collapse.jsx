import styles from './Collapse.module.css';
import { useState } from "react";
import arrow_open from '../../assets/images/arrow_open.png';
import arrow_close from '../../assets/images/arrow_close.png';

function Collapse({collapseTitle , collapseDescription}){
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=>{ 
        setIsOpen(prevState => !prevState)}

    return(
        <div className={styles.collapse_container}>
            <div  onClick={() =>handleClick() } className={styles.collapse_title}>
                {collapseTitle}
                <img  src = { isOpen ? arrow_close : arrow_open}
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

export default Collapse;