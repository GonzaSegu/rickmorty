import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Create from './pages/Create'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/'  element={<Landing></Landing>}></Route>
        <Route path='/home'  element={<Home></Home>}></Route>
        <Route path='/create'  element={<Create></Create>}></Route>
        <Route path='*'  element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
