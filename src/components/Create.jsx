import { useState, useEffect } from 'react'

export const Create = ({ setActiveComponent }) => {
  return (
    <div>
      <button onClick={() => setActiveComponent('menu')}>back</button>
    </div>
  )
}
