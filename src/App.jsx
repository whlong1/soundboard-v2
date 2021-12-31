import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Display from './components/Display'
import Search from './components/Search'
import Nav from './components/Nav'

const App = () => {
  const navigate = useNavigate()
  const [artist, setArtist] = useState(null)

  useEffect(() => {
    !artist && navigate('/')
  }, [artist, navigate])

  return (
    <>
      <Nav />
      <Search setArtist={setArtist} />
      {artist && <Display artist={artist} />}
    </>
  )
}

export default App
