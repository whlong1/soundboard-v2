import React from 'react'

const AlbumDetails = ({ album }) => {
  return (
    <>
      <header>
        <h3>{album.strAlbum}</h3>
        <p>({album.intYearReleased})</p>
      </header>
      <img src={album.strAlbumThumb} alt="album cover" />
      <p id="summary">{album.strDescriptionEN}</p>
    </>
  )
}

export default AlbumDetails