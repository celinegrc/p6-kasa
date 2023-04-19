import { list } from '../../datas/accomodationsList.js';
import { useParams } from 'react-router-dom';
import styles from './Logements.module.css';
import Tag from '../../components/Tag/Tag.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx';

function Logements() {
  const { id } = useParams();
  const accomodation = list.find(a => a.id === id);
  const tags = accomodation.tags;
  const equipements = accomodation.equipments;

  return (
    <section className={styles.logements_container}>
      <img src={accomodation.cover} alt={accomodation.title} />
      <h1>{accomodation.title}</h1>
      <p>{accomodation.location}</p>
      {tags.map((tags,index) => (<Tag key = {`${index}-${tags}`} tagName={tags} />))}
      <div className={styles.collapse_container}>
        <div className={styles.collapse_description}>
          <Collapse collapseTitle='Description' collapseDescription={accomodation.description} />
        </div>
        <div className={styles.collapse_equipment}>
          <Collapse collapseTitle='Equipements' collapseDescription={<div className={styles.equipment_container}>{equipements.map((equipment) => <p>{equipment}</p>)}</div>} />
        </div>
      </div>
      <p>{accomodation.host.name}</p>
    </section>
  );
}

export default Logements;
