import React from 'react'
import { Link } from 'react-router-dom'

const Thumbnail = ({ album }) => {
  return (
    <Link to={`/${album.idAlbum}`} state={album}>
      <img
        id={album.idAlbum}
        src={album.strAlbumThumb}
        alt={album.strAlbum}
      />
    </Link>
  )
}

export default Thumbnail