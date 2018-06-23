import React from 'react';

const Suggestions = (props) => {

  // console.log(props)
  const options = props.results.map( (r, ind) => (

    <li key={ind}>
      {r.name}
    </li>
  ))
  return <div><ul>{options}</ul></div>
}

export default Suggestions
