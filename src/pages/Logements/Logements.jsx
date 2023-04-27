import  list  from '../../datas/accomodationsList.json'
import { useParams, Navigate } from 'react-router-dom'
import styles from './Logements.module.css'
import Tag from '../../components/Tag/Tag.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
import Slideshow from '../../components/Slideshow/Slideshow.jsx'
import Rating from '../../components/Rating/Rating.jsx'

function Logements() {
  const { id } = useParams()
  const accomodation = list.find(accomodation => accomodation.id === id)

  if (!accomodation) {
    return <Navigate to="/404" />
  }

  const tags = accomodation.tags
  const equipements = accomodation.equipments
  const hostPicture = accomodation.host.picture
  const picturesList = accomodation.pictures
  const picturesLength = accomodation.pictures.length
  const ratingNumber = accomodation.rating

  return (
    <main className={styles.logements_container}>
      <Slideshow pictures={picturesList} picturesLength={picturesLength}/>
      <article className={styles.accomodation_details}>
        <div>
          <h1 className={styles.accomodation_title}>{accomodation.title}</h1>
          <p className={styles.accomodation_location}>{accomodation.location}</p>
            <div className={styles.tags_container}>
              {tags.map((tags, index) => (
                <Tag key={`${index}-${tags}`} tagName={tags} />
              ))}
            </div>
        </div>
        <div className={styles.host_rating_container}>
          <div className={styles.host}>
            <p className={styles.host_name}>{accomodation.host.name}</p>
            <img className={styles.host_picture} src={hostPicture} alt={accomodation.host.name} />
          </div>
          <div>
            <Rating ratingNumber={ratingNumber}/>
          </div>
        </div>
      </article>
      <article className={styles.collapse_container}>
        <div className={styles.collapse_description}>
          <Collapse 
            collapseTitle={<div className={styles.logements_collapse_title}>Description</div>}
            collapseDescription={<div className= {styles.accomodation_description}>{accomodation.description}</div>} 
            />
        </div>
        <div className={styles.collapse_equipment}>
          <Collapse 
            collapseTitle={<div className={styles.logements_collapse_title}>Equipement</div>}
            collapseDescription={
            <div className={styles.equipment_container}>
              {equipements.map((equipment) => (
                <p key={`${accomodation.id}-${equipment}`} className={styles.accomodation_equipments_list}>{equipment}</p>
              ))}
            </div>
            }
          />
        </div>
      </article>
    </main>
  )
}

export default Logements

