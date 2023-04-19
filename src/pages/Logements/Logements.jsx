import { list } from '../../datas/accomodationsList.js';
import { useParams, Navigate } from 'react-router-dom';
import styles from './Logements.module.css';
import Tag from '../../components/Tag/Tag.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import Rating from '../../components/Rating/Rating.jsx'


function Logements() {
  const { id } = useParams();
  const accomodation = list.find(accomodation => accomodation.id === id);
  if (!accomodation) {
    return <Navigate to="/404" />
  }

  const tags = accomodation.tags;
  const equipements = accomodation.equipments;
  const hostPicture = accomodation.host.picture
  const pictureslist = accomodation.pictures
  const picturesLength = accomodation.pictures.length
  const ratingNumber = accomodation.rating
  
  

  return (
    <section className={styles.logements_container}>

      <Slideshow pictures = {pictureslist} picturesLength = {picturesLength}/>
       <section className= {styles.accomodation_details}>
        <div>
          <h1 className = {styles.accomodation_title}>{accomodation.title}</h1>
          <p className ={styles.accomodation_location}>{accomodation.location}</p>
          {tags.map((tags,index) => (<Tag key = {`${index}-${tags}`} tagName={tags} />))}
        </div>
        <div>
          <div className = {styles.host}>
            <p  className = {styles.host_name}>{accomodation.host.name}</p>
            <img  className = {styles.host_picture} src = {hostPicture} alt="{accomodation.host.name}"/>
          </div>
          <div>
            <Rating ratingNumber={ratingNumber}/>
            <p>{ratingNumber}</p>
          </div>
        </div>
      </section>
      <div className={styles.collapse_container}>
        <div className={styles.collapse_description}>
          <Collapse collapseTitle='Description' collapseDescription={accomodation.description} />
        </div>
        <div className={styles.collapse_equipment}>
          <Collapse collapseTitle='Equipements' collapseDescription={<div className={styles.equipment_container}>{equipements.map((equipment) => <p key = {`${accomodation.id}-${equipment}`}>  {equipment}</p>)}</div>} />
        </div>
      </div>
    </section>
  );
}

export default Logements;
