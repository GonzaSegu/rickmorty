import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Create from './pages/Create'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonajesProvider from './contexts/PersonajesContext'

function App() {

  return (
    <>
    <PersonajesProvider>
      <Routes>
        <Route path='/'  element={<Landing></Landing>}></Route>
        <Route path='/home'  element={<Home></Home>}></Route>
        <Route path='/create'  element={<Create></Create>}></Route>
        <Route path='/profile'  element={<Profile></Profile>}></Route>
        <Route path='*'  element={<NotFound></NotFound>}></Route>
      </Routes>
    </PersonajesProvider>
    </>
  )
}

export default App
