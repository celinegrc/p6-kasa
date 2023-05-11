import styles from './Slideshow.module.css'
import { useState } from 'react'
import arrowLeft from '../../assets/images/arrow_left.png'
import arrowRight from '../../assets/images/arrow_right.png'

function Slideshow({ pictures, picturesLength }) {
  const [index, setIndex] = useState(0)

 // fonction pour afficher l'image précédente
const prevImg = (index) => {
  // Si l'index est supérieur à 0, on affiche l'image précédente (index - 1)
  // Sinon, on affiche la dernière image du tableau (pictures.length - 1)
  index > 0 ? setIndex(index - 1) : setIndex((index = pictures.length - 1))

}

// fonction pour afficher l'image suivante
const nextImg = (index) => {
  // Si l'index est inférieur au nombre total d'images - 1, on affiche l'image suivante (index + 1)
  // Sinon, on revient à la première image du tableau (index = 0)
  index < picturesLength - 1 ? setIndex(index + 1) : setIndex((index = 0))
}

  return (
    <div className={styles.carrousel_container}>
      {/* Image affichée dans le carrousel */}
      <img
        className={styles.carrousel_image}
        src={pictures[index]}
        alt="intérieur du logement"
        key={`slideshow-${index}`}
      />

      {/* Eléments affichés seulement si il y a plus d'une image */}
      {picturesLength > 1 && (
        <>
          <div className={styles.arrow_container}>
            {/* Bouton pour afficher l'image précédente */}
            <button onClick={() => prevImg(index)}>
              <img
                className={styles.arrow_left}
                src={arrowLeft}
                alt="flèche vers la gauche"
              />
            </button>
            {/* Bouton pour afficher l'image suivante */}
            <button onClick={() => nextImg(index)}>
              <img
                className={styles.arrow_right}
                src={arrowRight}
                alt="flèche vers la droite"
              />
            </button>
          </div>
          {/* Indicateur de numéro d'image actuel et de total d'images */}
          <p className={styles.carrousel_number}>
            {index + 1} / {picturesLength}
          </p>
        </>
      )}
    </div>
  )
}

export default Slideshow
