import Header from '../../components/Header/Header.jsx'
import {list} from '../../datas/accomodationsList.js'
import { useParams } from 'react-router-dom'
import styles from './Logements.module.css'

function Logements() {
    const { id } = useParams()
    const accomodation = list.find(a => a.id === id)
  
    return (
      <div className ={styles.logements_container}>
         <Header />
        <img src={accomodation.cover} alt={accomodation.title} />
        <h1>{accomodation.title}</h1>
        <p>{accomodation.description}</p>
        <p>{accomodation.host.name}</p>
      </div>
    )
  }

export default Logements;