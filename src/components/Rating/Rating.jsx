import redStar from '../../assets/images/star.png'
import greyStar from '../../assets/images/grey_star.png'
import styles from './Rating.module.css'

function Rating({ratingNumber}){
    const ratingStar =[]

    for (let i = 0; i <ratingNumber; i++) {
        ratingStar.push(
            <img src={redStar} alt={`${ratingNumber} étoiles`} />
        )
    }
    for (let i=0; i <5-ratingNumber; i++){
        ratingStar.push(
            <img src={greyStar} alt={`${ratingNumber} étoiles`} />
            
        )
    }

    return (
        <div className={styles.stars_container}>
            {ratingStar}
        </div>
    ) 
}

export default Rating