import { useState, useEffect } from 'react'

import { Create } from './Create'
import { Show } from './Show'

import './css/Menu.css'

export const Menu = () => {
  const [activeComponent, setActiveComponent] = useState('menu')

  return (
    <main className="menu">
      {activeComponent === 'menu' && (
        <>
          <h1 className="h1-menu-title">Forge of Heroes</h1>

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

      {activeComponent === 'create' && (
        <Create setActiveComponent={setActiveComponent} />
      )}

      {activeComponent === 'show' && (
        <Show setActiveComponent={setActiveComponent} />
      )}
    </main>
  )
}
