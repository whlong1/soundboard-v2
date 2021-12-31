import React from 'react'

const Footer = ({ artist }) => {
  return (
    <div className="footer">
      <p id="externalLink">External Links</p>
      <ul className="socialMedia">
        <li><a href={`https://${artist.strWebsite}`} id="web">{artist.strWebsite} </a></li>
        <li><a href={`https://${artist.strFacebook}`} id="fb"> {artist.strFacebook}</a></li>
        <li><a href={`https://${artist.strTwitter}`} id="twitter">{artist.strTwitter}</a></li>
      </ul>
    </div>
  )
}

export default Footer

