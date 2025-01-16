import { useState, useEffect } from 'react'

export const Show = ({ setActiveComponent }) => {
  return (
    <div>
      <button onClick={() => setActiveComponent('menu')}>back</button>
    </div>
  )
}
