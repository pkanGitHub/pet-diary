import React from 'react'
import Pet from './Pet'

const PetList = ({ pets }) => {
    return (
        <div>
            <div class="add-pet-btn">
                <button class="btn default">Add Pet</button>
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