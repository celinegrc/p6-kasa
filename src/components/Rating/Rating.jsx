import star from '../../assets/images/star.png'


function Rating(ratingNumber){
    return (
        <img src = {star} alt={`${ratingNumber} étoiles`}/>
    )
}

export default Rating;