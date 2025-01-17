import { useState, useEffect } from 'react'

export const Show = ({ setActiveComponent }) => {
  return (
    <div>
      <button
        className="button-go-back"
        onClick={() => setActiveComponent('menu')}
      >
        Go Back
      </button>
    </div>
  )
}
