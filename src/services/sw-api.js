const BASE_URL = `https://swapi.dev/api/`

async function getAllStarships() {
  try {
    const res = await fetch(`${BASE_URL}/starships/`)
    const info = await res.json();
    return info.results
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllStarships
};