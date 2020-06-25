import React from 'react'

const SelectPet = ({ pets, selectorValue, onChange }) => {
    return (
        <select id="pets" className="pet-option" name="pet_id" value={selectorValue} onChange={onChange}>
            <option className="options" value="select-pet">Select Pet</option>
            {pets.map((pet) => {
                return (< option key={pet.id} className="options" value={pet.id}>{pet.attributes.name}</option>)
            })}
        </select>
    )
}

export default SelectPet