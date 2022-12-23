import React from 'react'

export  function Todoitems({todo}) {
    const {id, notaTxt} = todo;
  return (
    <p>{notaTxt}</p>
  )
}
