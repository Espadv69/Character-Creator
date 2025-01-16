import { useState } from 'react'

import './css/Menu.css'

export const Menu = () => {
  const [activeComponent, setActiveComponent] = useState('menu')

  return (
    <main className="menu">
      {activeComponent === 'menu' && (
        <>
          <h1 className="h1-menu-title">Character Creator</h1>

          <div className="container-buttons-menu">
            <div className="container-button-menu">
              <button className="button-menu">Create</button>
            </div>

            <div className="container-button-menu">
              <button className="button-menu">Show</button>
            </div>
          </div>
        </>
      )}
    </main>
  )
}
