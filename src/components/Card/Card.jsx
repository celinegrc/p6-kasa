import {list} from '../../datas/accomodations-list.js'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'



function Card() {
    return (
        <div className ={styles.accomodation_container}>
          <ul className ={styles.accomodation_items}>
          {list.map(({id, cover, title}) => (
          <Link to ={`/fiche-logement/${id}`} key={id} className ={styles.accomodation_card}>
              <img className ={styles.accomodation_img} src= {cover} alt={title} />
              <h2 className ={styles.accomodation_title}>   {title}  </h2>
          </Link>
        ))}
          </ul> 
        </div>
      );
}

export default Card;
