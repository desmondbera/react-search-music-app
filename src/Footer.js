import React from 'react';

const Footer = () => {
  const footer = (
    <span>
      Made with extra <span role="img"  aria-label="fire-emoji">🔥</span> sauce by <a href="https://www.desmondb.com" rel="noopener noreferrer" target="_blank">Desmond Beramendi</a>
    </span>
  )
  return <div className="footer">{footer}</div>
}

export default Footer
