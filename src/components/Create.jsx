import { useState, useEffect } from 'react'

import './css/Create.css'
import { imagesMapper } from '../utils/imageMapper.js'
import { classDescriptions } from '../utils/classDescriptions.js'

import Elf from '../classes/Elf.js'
import Dwarf from '../classes/Dwarf.js'
import Goblin from '../classes/Goblin.js'
import Mage from '../classes/Mage.js'

export const Create = ({ setActiveComponent }) => {
  const [name, setName] = useState('')
  const [classType, setClassType] = useState('mannequin')
  const [character, setCharacter] = useState(null)

  const setImage = imagesMapper[classType] || imagesMapper.mannequin

  const setDescription =
    classDescriptions[classType] || classDescriptions.mannequin

  const showCharacterStats = () => {
    const classes = {
      elf: Elf,
      dwarf: Dwarf,
      goblin: Goblin,
      mage: Mage,
    }

    setCharacter(classes[classType] ? new classes[classType](name) : null)
  }

  const saveCharacter = () => {
    if (!character) return

    const savedCharacters = JSON.parse(localStorage.getItem('characters')) || []
    const characterData = {
      ...character.getStats(),
      image: setImage,
    }
    savedCharacters.push(characterData)
    localStorage.setItem('characters', JSON.stringify(savedCharacters))
    setName('')
    setClassType('mannequin')
    alert('Character saved!')
  }

  const stats = character ? character.getStats() : null

  const namePlaceholder = () =>
    classType === 'mannequin'
      ? 'First select a class'
      : `Enter your ${classType}'s name`

  useEffect(() => {
    showCharacterStats()
  }, [classType, name])

  return (
    <div className="create">
      <button
        className="button-go-back"
        onClick={() => setActiveComponent('menu')}
      >
        Go Back
      </button>
      <div className="container-img-create">
        <img className="img-create" src={setImage} alt={classType} />
        <p className="description-img-create">{setDescription}</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="form-create">
        <select
          className="select-create"
          value={classType}
          onChange={(e) => setClassType(e.target.value)}
        >
          <option value="mannequin" disabled>
            Choose a class
          </option>
          <option value="elf">Elf</option>
          <option value="dwarf">Dwarf</option>
          <option value="goblin">Goblin</option>
          <option value="mage">Mage</option>
        </select>

        <input
          type="text"
          className="input-form-create"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={namePlaceholder()}
          disabled={classType === 'mannequin'}
          minLength={2}
          maxLength={13}
        />

        <div className="container-stats-create">
          <h4 className="h4-stats-create">STATS</h4>
          {stats && (
            <div>
              <ul className="ul-create">
                <li className="li-create name">
                  <span>Name:</span> {stats.name}
                </li>
                <li className="li-create">
                  <span>Health:</span> {stats.health}
                </li>
                <li className="li-create">
                  <span>Strength:</span> {stats.strength}
                </li>
                <li className="li-create">
                  <span>Agility:</span> {stats.agility}
                </li>
                <li className="li-create">
                  <span>Intelligence:</span> {stats.intelligence}
                </li>
                <li className="li-create weapon">
                  <span>Weapon:</span> {stats.weapon}
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          className="button-go-back"
          onClick={saveCharacter}
          disabled={!name || classType === 'mannequin'}
        >
          Create
        </button>
      </form>
    </div>
  )
}
