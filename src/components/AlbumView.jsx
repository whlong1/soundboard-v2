import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import * as musicService from '../services/musicService'
import AlbumDetails from './AlbumDetails'
import Tracklist from './Tracklist'

const AlbumView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const getAlbumTracks = async () => {
      const data = await musicService.getAlbumTracks(id)
      setTracks(data)
    }
    getAlbumTracks()
  }, [id])

  return (
    <div className='album-view'>
      <button onClick={() => navigate(-1)}>BACK</button>
      <AlbumDetails album={state} />
      <p>Tracklist</p>
      <Tracklist tracks={tracks} />
    </div>
  )
}

export default AlbumView