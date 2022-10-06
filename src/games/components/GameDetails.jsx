import React from 'react'
import { useParams } from 'react-router-dom'

export const GameDetails = () => {
 // console.log(useParams())
  const{id}= useParams()
  console.log(id)
  return (
    <div>


      <h1>GameDetails</h1>
    </div>
  )
}
