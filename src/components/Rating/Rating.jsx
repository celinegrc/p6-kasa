import redStar from '../../assets/images/star.png'
import greyStar from '../../assets/images/grey_star.png'
import styles from './Rating.module.css'

function Rating({ratingNumber}){

    // Initialiser un tableau vide pour stocker les étoiles de notation
    const ratingStar =[]
    // Ajouter les étoiles rouges dans le tableau en fonction de la note donnée
    for (let i = 0; i <ratingNumber; i++) {
        ratingStar.push(
            <img src={redStar} alt={`${ratingNumber} étoiles`} key={`red-star-${i}`}/>
        )
    }
    // Ajouter les étoiles grises restantes pour avoir 5 étoiles au total
    for (let i=0; i <5-ratingNumber; i++){
        ratingStar.push(
            <img src={greyStar} alt={`${ratingNumber} étoiles`} key={`grey-star-${i}`} />  
        )
    }
    // Afficher les étoiles de notation
    return (
        <div className={styles.stars_container}>
            {ratingStar}
        </div>
    ) 
}

export default Rating
