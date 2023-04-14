import Card from '../../components/Card/Card.jsx';
import styles from './Home.module.css'
import Header from '../../components/Header/Header.jsx'

function Home() {
  return (
    <div>
       <Header />
      <div className={styles.banniere}>
        <div className={styles.banniere_cover}><h1>Chez vous, partout et ailleurs</h1></div> 
      </div>
      <div>
        <Card />
      </div>
    </div>
    
  );
}

export default Home;
