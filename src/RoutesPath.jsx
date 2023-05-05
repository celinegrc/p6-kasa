import Logements from './pages/Logements/Logements.jsx'
import Home from './pages/Home/Home.jsx'
import APropos from './pages/APropos/APropos.jsx'
import Error from './pages/Error404/Error404.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'

export const router = createBrowserRouter([
  {
    path: '/',
     element : (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/fiche-logement/:id",
    element : (
      <>
        <Header />
        <Logements />
      </>
    ),
  },
  {
    path: "/a-propos",
    element : (
      <>
        <Header />
        <APropos />
      </>
    ),
  },
  {
    path: "/*",
    element : (
      <>
        <Header />
        <Error />
      </>
    ),
  }
])

