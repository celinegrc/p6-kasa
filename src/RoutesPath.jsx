import Logements from './pages/Logements/Logements.jsx'
import Home from './pages/Home/Home.jsx'
import APropos from './pages/APropos/APropos.jsx'
import Error from './pages/Error404/Error404.jsx'
import { createBrowserRouter, ScrollRestoration  } from 'react-router-dom'
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
       <ScrollRestoration />
        <Header />
        <Logements />
      </>
    ),
  },
  {
    path: "/a-propos",
    element : (
      <>
      <ScrollRestoration />
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

