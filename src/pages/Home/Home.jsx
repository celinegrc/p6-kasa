import Card from '../../components/Card/Card.jsx'
import styles from './Home.module.css'
import list from '../../datas/accomodationsList.json'

function Home() {
  return (
    <main className={styles.home_container}>
      <div className={styles.banner}>
        <div className={styles.banner_cover}>
          <h1 className={styles.banner_title}>Chez vous, partout et ailleurs</h1>
        </div> 
      </div>
      <article className ={styles.accomodation_container}>
        <ul className ={styles.accomodation_items}>
         {/* Pour chaque logement, on crée un élément Card */}
          {list.map(({id, cover, title}) => ( 
            <li key={id} > 
              <Card id = {id} cover = {cover} title = {title} /> 
            </li>  
          ))}
        </ul>
      </article>
    </main>
  )
}

export default Home
