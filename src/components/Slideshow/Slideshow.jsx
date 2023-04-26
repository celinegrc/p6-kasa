import styles from './Slideshow.module.css';
import { useState } from 'react';
import arrowLeft from '../../assets/images/arrow_left.png';
import arrowRight from '../../assets/images/arrow_right.png';

function Slideshow({ pictures, picturesLength }) {
  const [index, setIndex] = useState(0);

  const prevImg = (index) => {
    index > 0 ? setIndex(index-1) : setIndex ((index = pictures.length -1 ))
  }

  const nextImg = (index) => {
    index < (picturesLength - 1) ? setIndex (index + 1) :  setIndex((index = 0))
  }
 
  return (
    <div className={styles.carrousel_container}>
      <img className={styles.carrousel_image} src={pictures[index]} alt="intérieur du logement" key = {`${index}`} />

      {picturesLength > 1 && (
        <>
          <div className={styles.arrow_container}>
            <img
              className={styles.arrow_left}
              src={arrowLeft}
              alt="flèche vers la gauche"
              onClick={() => prevImg(index)}
            />
            <img
              className={styles.arrow_right}
              src={arrowRight}
              alt="flèche vers la droite"
              onClick={() => nextImg(index)}
            />
          </div>
          <p className={styles.carrousel_number}>
            {index + 1} / {picturesLength}
          </p>
        </>
      )}
    </div>
  );
}

export default Slideshow;
