import React from 'react'

const Pet = ({ pet, setNewPet, setPopOut, deletePet }) => {

    const birthDate = new Date(Date.parse(pet.attributes.birth_date))
    const age = (new Date().getFullYear()) - birthDate.getFullYear()

    const updatePet = () => {
        setPopOut(true)
        setNewPet({
            id: pet.id,
            name: pet.attributes.name,
            birth_date: pet.attributes.birth_date
        })
    }
    return (
        <div>
            <span onClick={() => deletePet(pet)}><i className="fa fa-trash" aria-hidden="true" style={{ padding: "0% 3%" }}></i></span>
            <span className="pet-name">{`${pet.attributes.name}`}</span>
            <span className="birth-date">{`Birth Date: ${pet.attributes.birth_date}`}</span>
            <span className="age">{`Age: ${age}`}</span>
            <span onClick={updatePet}><i className="fa fa-pencil" aria-hidden="true" style={{ padding: "0% 3%" }}></i></span>

        </div>
    )
}

export default Pet;