import { useState, useEffect } from 'react'

import './css/Create.css'

import MannequinImage from '../assets/mannequin.png'
import ElfImage from '../assets/elf.png'
import DwarfImage from '../assets/dwarf.png'

export const Create = ({ setActiveComponent }) => {
  const [name, setName] = useState('')
  const [classType, setClassType] = useState('mannequin')

  const setImage = () => {
    if (classType === 'mannequin') return MannequinImage
    if (classType === 'elf') return ElfImage
    if (classType === 'dwarf') return DwarfImage
    return null
  }

  return (
    <div className="create">
      <button onClick={() => setActiveComponent('menu')}>Go back</button>
      <div>
        <img className="img-create" src={setImage()} alt={classType} />
      </div>

      <select value={classType} onChange={(e) => setClassType(e.target.value)}>
        <option value="mannequin">Mannequin</option>
        <option value="elf">Elf</option>
        <option value="dwarf">Dwarf</option>
      </select>
    </div>
  )
}
