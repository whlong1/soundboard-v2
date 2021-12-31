import React from 'react'

const Tracklist = ({ tracks }) => {
  return (
    <ol className='tracklist'>
      {tracks.map((track) => (
        <li key={track.idTrack}>
          {track.strTrack}
        </li>
      ))}
    </ol>
  )
}

export default Tracklist