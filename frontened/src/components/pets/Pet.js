import React from 'react'

// import moment from 'moment' //convert date format

const Pet = ({ pet, setNewPet, setPopOut, deletePet }) => {
    // const birthDate = pet.attributes.birth_date
    // const dateConv = new Date(moment(birthDate).format('MM/DD/YYYY'))

    const birthDate = new Date(Date.parse(pet.attributes.birth_date))
    const age = (new Date().getFullYear()) - birthDate.getFullYear()
    // const age = birthDate.diff(moment(), 'years')

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