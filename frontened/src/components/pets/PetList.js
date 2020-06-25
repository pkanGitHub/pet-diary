import React from 'react'
import Pet from './Pet'

const PetList = ({ pets, setPopOut, setNewPet, deletePet }) => {
    const addPetButton = () => {
        setPopOut(true)
        setNewPet({
            id: "",
            name: "",
            birth_date: ""
        })
    }
    return (
        <div className="pet-list-container">
            <div className="add-pet-btn">
                <button className="btn default" onClick={addPetButton}>Add Pet</button>
            </div>
            <div className="pet-list">
                {pets.data && pets.data.map(pet => {
                    return <Pet key={pet.id} pet={pet} setNewPet={setNewPet} setPopOut={setPopOut} deletePet={deletePet} />
                })}
            </div>
        </div>
    )
}


export default PetList;