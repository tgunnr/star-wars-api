// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// services
import * as swService from '../services/sw-api'

function ShipDetails() {
  const { id } = useParams()
  const [ship, setShip] = useState()

  useEffect(() => {
    const fetchShip = async () => {
      try {
        const shipData = await swService.getStarship(id)
        console.log(shipData)
        setShip(shipData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchShip()
  }, [id])

  if (!ship) return <h1>Ship not found!</h1>

  return (
    <div>
      <h1>Name: {ship.name}</h1>
      <h1>Model: {ship.model}</h1>
      <Link to="/">Return to Ships!</Link>
    </div>
  )
}

export default ShipDetails