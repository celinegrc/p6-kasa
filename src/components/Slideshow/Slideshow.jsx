import styles from './Slideshow.module.css';
import { useState } from 'react';
import arrowLeft from '../../assets/images/arrow_left.png';
import arrowRight from '../../assets/images/arrow_right.png';

function Slideshow({ pictures, picturesLength }) {
  const prevImg = (index) => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex((index = pictures.length - 1));
    }
  };

  const nextImg = (index) => {
    if (index < picturesLength - 1) {
      setIndex(index + 1);
      
    } else {
      setIndex((index = 0));
    }
  };

  const [index, setIndex] = useState(0);

  return (
    <div className={styles.carrousel_container}>
      <img className={styles.carrousel_image} src={pictures[index]} alt="" key = {`${index}`} />

      {picturesLength > 1 && (
        <>
          <div className={styles.arrow_container}>
            <img
              className={styles.arrow_left}
              src={arrowLeft}
              alt=""
              onClick={() => prevImg(index)}
            />
            <img
              className={styles.arrow_right}
              src={arrowRight}
              alt=""
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
