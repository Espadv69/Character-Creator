import { useState, useEffect } from 'react'

import './css/Menu.css'
import { Create } from './Create'

export const Menu = () => {
  const [activeComponent, setActiveComponent] = useState(() => {
    const savedComponent = localStorage.getItem('activeComponent')
    return savedComponent ? savedComponent : 'menu'
  })

  useEffect(() => {
    localStorage.setItem('activeComponent', activeComponent)
  }, [activeComponent])

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

      {activeComponent === 'create' && (
        <Create setActiveComponent={setActiveComponent} />
      )}
    </main>
  )
}
