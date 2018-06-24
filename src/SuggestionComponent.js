import React from 'react';

const Suggestions = (props) => {
  const options = props.results.map( (r, ind) => (

    <li key={ind}>
      { r.name === '(null)' ? 'ARTIST UNKNOWN' : `'`+r.name +  `' has been played ` + r.playcount + ` times on Last.FM.` }
    </li>
  ))

  return <div><ol>{options}</ol></div>
}

export default Suggestions
