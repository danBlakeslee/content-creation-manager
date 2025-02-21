import React from 'react'

const Loading = ({customName}) => {
  return (
    <div>{`${customName || "...Loading"}`}</div>
  )
}

export default Loading