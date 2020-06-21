import React from 'react'
import Pet from './Pet'

const PetList = ({ pets, popOut, setPopOut }) => {
    return (
        <div>
            <div class="add-pet-btn">
                <button class="btn default" onClick={() => setPopOut(!popOut)}>Add Pet</button>
            </div>
            <div class="pet-list">
                {pets.data && pets.data.map(pet => {
                    return <Pet pet={pet} />
                })}
            </div>
        </div>
    )
}


export default PetList;