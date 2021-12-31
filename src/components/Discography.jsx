import React, { useState, useEffect } from 'react'
import * as musicService from '../services/musicService'
import Thumbnail from './Thumbnail'

const Discography = ({ id }) => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchAlbums = async () => {
      const data = await musicService.getAlbums(id)
      setAlbums(data)
    }
    fetchAlbums()
  }, [id])

  return (
    <div className="discography">
      <p>Discography</p>
      {albums.map((album) => (
        album.strAlbumThumb && <Thumbnail key={album.idAlbum} album={album} />
      ))}
    </div>
  )
}

export default Discography