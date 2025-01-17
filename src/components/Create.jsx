import { useState, useEffect } from 'react'

import './css/Create.css'
import { imagesMapper } from '../utils/imageMapper.js'
import { classDescriptions } from '../utils/classDescriptions.js'

import Elf from '../classes/Elf.js'
import Dwarf from '../classes/Dwarf.js'
import Goblin from '../classes/Goblin.js'

export const Create = ({ setActiveComponent }) => {
  const [name, setName] = useState('')
  const [classType, setClassType] = useState('mannequin')
  const [character, setCharacter] = useState(null)

  const setImage = imagesMapper[classType] || imagesMapper.mannequin

  const setDescription =
    classDescriptions[classType] || classDescriptions.mannequin

  const showCharacterStats = () => {
    if (classType === 'elf') {
      setCharacter(new Elf(name))
    } else if (classType === 'dwarf') {
      setCharacter(new Dwarf(name))
    } else if (classType === 'goblin') {
      setCharacter(new Goblin(name))
    } else {
      setCharacter(null)
    }
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
      <button onClick={() => setActiveComponent('menu')}>Go back</button>
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
        </select>

        <input
          type="text"
          className="input-form-create"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={namePlaceholder()}
          disabled={classType === 'mannequin'}
          minLength={2}
        />
      </form>

      {stats && (
        <div>
          <span className="span-name-create">Name: {stats.name}</span>

          <ul className="ul-create">
            <li className="li-create">Health: {stats.health}</li>
            <li className="li-create">Strength: {stats.strength}</li>
            <li className="li-create">Agility: {stats.agility}</li>
            <li className="li-create">Intelligence: {stats.intelligence}</li>
            <li className="li-create">Weapon: {stats.weapon}</li>
          </ul>
        </div>
      )}
    </div>
  )
}
