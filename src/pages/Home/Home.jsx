import Card from '../../components/Card/Card.jsx';
import styles from './Home.module.css'
import Header from '../../components/Header/Header.jsx'
import {list} from '../../datas/accomodationsList.js'

function Home() {
  return (
    <div className={styles.home_container}>
       <Header />
      <div className={styles.banniere}>
        <div className={styles.banniere_cover}><h1>Chez vous, partout et ailleurs</h1></div> 
      </div>
      <div className ={styles.accomodation_container}>
        <ul className ={styles.accomodation_items}>
          {list.map(({id, cover, title}) => (
            <li key={id} > <Card id = {id} cover = {cover} title = {title} /> </li>  
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
