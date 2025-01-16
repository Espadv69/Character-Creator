import { useState, useEffect } from 'react'

import MannequinImage from '../assets/mannequin.png'
import GoblinImage from '../assets/goblin.png'
import ElfImage from '../assets/elf.png'

export const Create = ({ setActiveComponent }) => {
  const [name, setName] = useState('')
  const [classType, setClassType] = useState('mannequin')

  const setImage = () => {
    if (classType === 'mannequin') return MannequinImage
    if (classType === 'goblin') return GoblinImage
    return null
  }

  return (
    <div>
      <button onClick={() => setActiveComponent('menu')}>back</button>

      <img className="img-create" src={setImage()} alt="" />

      <select value={classType} onChange={(e) => setClassType(e.target.value)}>
        <option value="mannequin">Mannequin</option>
        <option value="goblin">Goblin</option>
      </select>
    </div>
  )
}
