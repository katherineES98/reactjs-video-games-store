import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { GameRoutes } from '../games/routes/GameRoutes'

export const AppRouter = () => {
  return (
    <Routes>

      {/** LOGIN Y REGISTRO*/}
      <Route path='/auth/*' element={<AuthRoutes/>} />
    {/**GAMESAPP */}
    <Route path='/*' element={<GameRoutes/>}  />


    </Routes>
  )
}
