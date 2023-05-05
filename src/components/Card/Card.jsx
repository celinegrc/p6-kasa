import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card({id, cover, title}) {
  return (
      <div className={styles.accomodation_card}>
        {/* Lien qui redirige vers la fiche détaillée du logement */}
        <Link to={`/fiche-logement/${id}`}>
          <img className={styles.accomodation_img} src={cover} alt={title} />
          <h2 className={styles.accomodation_title}> {title} </h2>
        </Link>
     </div>
  )
}

export default Card

