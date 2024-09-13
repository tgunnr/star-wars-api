// npm modules
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// pages

// css
import './App.css'

// services
import * as swService from './services/sw-api'

function App() {
  const [ships, setShips] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const shipData = await swService.getAllStarships();
        setShips(shipData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchShips()
  }, [])

  if (loading) return <h1>Loading...</h1>
  return (
    <div>
    <h1>Star Wars Ships</h1>
    <ul>
      {ships.map(ship => (
        <li key={ship.name}>{ship.name}</li>
      ))}
    </ul>
  </div>
  )
}

export default App
