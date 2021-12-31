import axios from "axios"
const BASE_URL = 'https://theaudiodb.com/api/v1/json/'

const search = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}${process.env.API_KEY}/search.php?s=${req.query.name}`)
    return res.status(200).json(response.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getAlbums = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}${process.env.API_KEY}/album.php?i=${req.params.id}`)
    const discography = response.data.album.sort((a, b) => a.intYearReleased - b.intYearReleased)
    return res.status(200).json(discography)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getAlbumTracks = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}${process.env.API_KEY}/track.php?m=${req.params.id}`)
    return res.status(200).json(response.data.track)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export {
  search,
  getAlbums,
  getAlbumTracks
}