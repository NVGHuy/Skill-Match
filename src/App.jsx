import Home from '~/pages/Home/Home'
import { Route, Routes, Navigate } from 'react-router-dom'
import Setting from '~/pages/Setting/Setting'
function App() {

  return (
    <Routes>
      <Route path='/' element={ <Navigate to="/home" replace={true}/> } />
      <Route path='/home' element={ <Home/> } />
      <Route path='/settings/information' element={ <Setting/> } />
      <Route path='/settings/notification' element={ <Setting/> } />
      <Route path='/settings/security' element={ <Setting/> } />
      <Route path='/settings/help' element={ <Setting/> } />
    </Routes>
  )
}

export default App
