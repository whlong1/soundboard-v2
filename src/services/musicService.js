const BASE_URL = '/api/music'

const search = async (name) => {
  try {
    const res = await fetch(`${BASE_URL}/?name=${name}`)
    return await res.json()
  } catch (error) {
    return
  }
}

const getAlbums = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`)
    return await res.json()
  } catch (error) {
    return
  }
}

const getAlbumTracks = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/album/${id}`)
    return await res.json()
  } catch (error) {
    return
  }
}

export {
  search,
  getAlbums,
  getAlbumTracks
}
