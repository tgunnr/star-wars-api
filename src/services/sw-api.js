const BASE_URL = `https://swapi.dev/api/starships`

async function getAllStarships() {
  try {
    const res = await fetch(`${BASE_URL}`)
    const info = await res.json()
    return info.results
  } catch (error) {
    console.log(error)
  }
}

async function getStarship(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}/`)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllStarships,
  getStarship
}