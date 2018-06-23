import React from 'react';

const Status = (props) => {
  const searchUpdate = (
    <span>
      { props.status.length >= 1 ? `You are searching for ` + props.status + `. Here are `+ props.status +`'s top 5 albums.` : `Please keep typing` }
    </span>
  )
  return <div className="searchStatus">{searchUpdate}</div>
}

export default Status
