import star from '../../assets/images/star.png'
import greyStar from '../../assets/images/grey_star.png'
import styles from './Rating.module.css'


function Rating(ratingNumber){
    return (
        <div className={styles.stars_container}>
        <img  src = {star} alt={`${ratingNumber} étoiles`}/> 
        <img src = {star} alt={`${ratingNumber} étoiles`}/> 
        <img src = {star} alt={`${ratingNumber} étoiles`}/>
        <img src = {star} alt={`${ratingNumber} étoiles`}/> 
        <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
        </div>
    )
}

export default Rating;