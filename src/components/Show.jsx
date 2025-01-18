import { useState, useEffect } from 'react'

export const Show = ({ setActiveComponent }) => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const savedCharacters = JSON.parse(localStorage.getItem('characters')) || []
    setCharacters(savedCharacters)
  }, [])

  return (
    <div className="show">
      <button
        className="button-go-back"
        onClick={() => setActiveComponent('menu')}
      >
        Go Back
      </button>

      <h2>Your Characters</h2>
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
    </div>
  )
}
