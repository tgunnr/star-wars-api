// npm modules
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// css
import './App.css'

// services
import * as swService from './services/sw-api'

// Components
import ShipDetails from './components/ShipDetails'

function App() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const shipData = await swService.getAllStarships()
        setShips(shipData)
        console.log(shipData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchShips()
  }, [])

  const ShipList = () => {
    return (
      <div>
        <ul>
          {ships.map(ship => {
            // const shipId = ship.url.split('/').filter(Boolean).pop()
            const shipId = ship.url.replace('https://swapi.dev/api/starships/', '')
            return (
              <li key={shipId}>
                <Link to={`/starships/${shipId}`} className="ship-button">
                  {ship.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <Router>
      <div>
        <h1>Star Wars Ships</h1>
        <Routes>
          <Route path="/" element={<ShipList />} />
          <Route path="/starships/:id" element={<ShipDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
