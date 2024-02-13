  import axios from 'axios'
  
  const BASE_URL = 'https://swapi.dev/api'
  
  const http = axios.create({
    baseURL: `${BASE_URL}`,
    headers: { 'Content-Type': 'application/json' }
  })

  async function getPlanets (page) {
    const response = await http.get(`/planets/`, { params: { page: page }})
    return response
  }

  async function getPlanetById (planetId) {
    const response = await http.get(`/planets/${planetId}`)
    return response
  }

  export {
    getPlanets,
    getPlanetById
  }