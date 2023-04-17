
import Logements from './pages/Logements/Logements.jsx';
import Home from './pages/Home/Home.jsx';
import APropos from './pages/APropos/APropos.jsx';
import Error from './pages/Error404/Error404.jsx';
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: "/fiche-logement/:id",
    element: <Logements />,
  },
  {
    path: "/a-propos",
    element: <APropos />,
  },
  {
    path: "/*",
    element: <Error />,
  }
])
