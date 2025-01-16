import { useState } from 'react'

import { Create } from './Create.jsx'
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
              <button
                className="button-menu"
                onClick={() => setActiveComponent('create')}
              >
                Create
              </button>
            </div>

            <div className="container-button-menu">
              <button
                className="button-menu"
                onClick={() => setActiveComponent('show')}
              >
                Show
              </button>
            </div>
          </div>
        </>
      )}

      {activeComponent === 'create' && <Create />}
    </main>
  )
}
