import { useState, useEffect } from 'react'

import './css/Menu.css'

export const Menu = () => {
  return (
    <main className="menu">
      <h1 className="h1-menu-title">Character Creator</h1>

      <div className="container-buttons-menu">
        <div className="container-button-menu">
          <button className="button-menu">Create</button>
        </div>

        <div className="container-button-menu">
          <button className="button-menu">Show</button>
        </div>
      </div>
    </main>
  )
}
