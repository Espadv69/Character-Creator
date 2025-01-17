import { useState, useEffect } from 'react'

import { Create } from './Create'
import { Show } from './Show'

import menuImage from '../assets/menu.png'
import beachImage from '../assets/beach.png'
import './css/Menu.css'

export const Menu = () => {
  const [activeComponent, setActiveComponent] = useState('menu')

  return (
    <main className="menu">
      {activeComponent === 'menu' && (
        <>
          <h1 className="h1-menu-title">Forge of Heroes</h1>

          <div className="container-buttons-menu">
            <button
              className="button-menu"
              onClick={() => setActiveComponent('create')}
            >
              Create
            </button>

            <button
              className="button-menu"
              onClick={() => setActiveComponent('show')}
            >
              Show
            </button>
          </div>

          <div className="images-menu">
            <img src={menuImage} alt="There is a montaine and a blue sky" />
            <img src={beachImage} alt="There is a montaine and a blue sky" />
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
