import React from 'react'

const ArtistDetails = ({ artist }) => {
  return (
    <div className="artist-details">
      <img src={artist.strArtistThumb} alt="artist thumbnail" />
      <div className="bullet-points">
        <h3>{artist.strArtist}</h3>
        <p>Location: <span>{artist.strCountry}</span></p>
        <p>Formed in: <span>{artist.intFormedYear}</span></p>
        <p>Label: <span>{artist.strLabel ? artist.strLabel : 'Not Available'}</span></p>
        <p>Genre: <span>{artist.strGenre}</span></p>
        <p>Mood: <span>{artist.strMood ? artist.strMood : 'Not Available'}</span></p>
      </div>
    </div>
  )
}

export default ArtistDetails