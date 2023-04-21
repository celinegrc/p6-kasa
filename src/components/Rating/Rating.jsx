import star from '../../assets/images/star.png';
import greyStar from '../../assets/images/grey_star.png';
import styles from './Rating.module.css';


function Rating({ratingNumber}){
    const rating = ()=> {
        switch (ratingNumber) {
        case '1':
            return (
            <div className={styles.stars_container}>
                <img src = {star} alt={`${ratingNumber} étoiles`}/>
                <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
                <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
                <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
                <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
            </div>);
           
        case '2':
            return (
            <div className={styles.stars_container}>
                <img src = {star} alt={`${ratingNumber} étoiles`}/>
                <img src = {star} alt={`${ratingNumber} étoiles`}/>
                <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
                <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
                <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
            </div>);
           
        case '3':
            return (
                <div className={styles.stars_container}>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
                    <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
                </div>);
            
        case '4':
            console.log(ratingNumber)
            return (
                <div className={styles.stars_container}>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {greyStar} alt={`${ratingNumber} étoiles`}/>
                    </div>);
            
        case '5':
            console.log(ratingNumber)
            return (
                <div className={styles.stars_container}>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                    <img src = {star} alt={`${ratingNumber} étoiles`}/>
                </div>);
           
    
        default:
            return null;
        }
    }
        return (rating())
}

export default Rating;