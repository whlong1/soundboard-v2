import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

//Components
import ArtistDetails from './ArtistDetails'
import Discography from './Discography'
import AlbumView from './AlbumView'
import Footer from './Footer'

const Display = ({ artist }) => {
  return (
    <div className='container'>
      <div className="view">

        <div className="column-left">
          <ArtistDetails artist={artist} />
          <p>{artist.strBiographyEN}</p>
        </div>

        <div className="column-right">
          <Routes>
            <Route path="/" element={<Discography id={artist.idArtist} />} />
            <Route path="/:id" element={artist ? <AlbumView /> : <Navigate to="/" />} />
          </Routes>
        </div>
        
      </div>
      <Footer artist={artist} />
    </div>
  )
}

export default Display