import {list} from '../../datas/accomodations-list.js'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card() {
    return (
        <div>
          <ul className ={styles.accomodation_items}>
          {list.map(accomodation => (
          <Link to ='/fiche-logement/Logements' key={accomodation.id} className ={styles.accomodation_card}>
              <img className ={styles.accomodation_img} src= {accomodation.cover} alt={accomodation.title} />
              <h2 className ={styles.accomodation_title}>   {accomodation.title}  </h2>
          </Link>
        ))}
          </ul> 
        </div>
      );
}

export default Card;
