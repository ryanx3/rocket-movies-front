import { Routes, Route, Navigate } from 'react-router-dom'

import { NewNote } from '../pages/NewNote'
import { NoteUpdated } from '../pages/NoteUpdated'
import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'
import { Home } from '../pages/Home'

export function AppRoutes() {
  const user = localStorage.getItem("@rocketmovies:user")
  
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/newnote' element={<NewNote/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/noteupdate/:id' element={<NoteUpdated/>}/>
      <Route path='/details/:id' element={<Details/>}/>

      {!user && <Route path='*' element={<Navigate to="/"/>}/>}
    </Routes>
  )
}
