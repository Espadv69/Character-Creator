import { useState, useEffect } from 'react'

import './css/Create.css'
import { imagesMapper } from '../utils/imageMapper.js'

export const Create = ({ setActiveComponent }) => {
  const [name, setName] = useState('')
  const [classType, setClassType] = useState('mannequin')

  const setImage = () => imagesMapper[classType] || imagesMapper.mannequin

  const namePlaceholder = () => {
    if (classType === 'mannequin') return 'First select a class'
    return `Enter your ${classType}'s name`
  }

  return (
    <div className="create">
      <button onClick={() => setActiveComponent('menu')}>Go back</button>
      <div className="container-img-create">
        <img className="img-create" src={setImage()} alt={classType} />
      </div>

      <form onSubmit="" className="form-create">
        <select
          className="select-create"
          value={classType}
          onChange={(e) => setClassType(e.target.value)}
        >
          <option value="mannequin" disabled selected>
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
        />
      </form>
    </div>
  )
}
