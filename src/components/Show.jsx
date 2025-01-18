import { useState, useEffect } from 'react'

import './css/Show.css'

export const Show = ({ setActiveComponent }) => {
  const [characters, setCharacters] = useState([])

  const deleteAllCharacters = () => {
    if (characters.length === 0) {
      return
    }

    const confirmDelete = window.confirm(
      'Are you sure you want to delete all characters?'
    )

    if (confirmDelete) {
      localStorage.clear()
      setCharacters([])
    }
  }

  useEffect(() => {
    const savedCharacters = JSON.parse(localStorage.getItem('characters')) || []
    setCharacters(savedCharacters)
  }, [])

  return (
    <div className="show">
      <h1 className="h1-show-title">Your Characters</h1>
      <button
        className="button-go-back"
        onClick={() => setActiveComponent('menu')}
      >
        Go Back
      </button>

      <div className="characters-list">
        {characters.length > 0 ? (
          characters.map((char, index) => (
            <div key={index} className="character-card">
              <img
                src={char.image}
                alt={char.name}
                className="character-image"
              />
              <h3>{char.name}</h3>
              <p>Health: {char.health}</p>
              <p>Strength: {char.strength}</p>
              <p>Agility: {char.agility}</p>
              <p>Intelligence: {char.intelligence}</p>
              <p>Weapon: {char.weapon}</p>
            </div>
          ))
        ) : (
          <p>No characters saved yet!</p>
        )}
      </div>

      <button className="button-go-back" onClick={deleteAllCharacters}>
        Delete all Characters
      </button>
    </div>
  )
}
