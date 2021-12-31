import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as musicService from '../services/musicService'

const Search = ({ setArtist }) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [err, setErr] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    const data = await musicService.search(name)
    data ? setArtist(data.artists[0]) : setErr(true)
    navigate('/')
    setName('')
  }

  return (
    <form onSubmit={handleSearch}>
      <h4>{!err ? 'Find an Artist' : 'Whoops! Something went wrong.' }</h4>
      <input
        required
        type="text"
        placeholder="Search"
        className="search-bar"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  )
}
export default Search