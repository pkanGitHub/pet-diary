import React from 'react'

// import moment from 'moment' //convert date format

const Pet = ({ pet }) => {
    // const birthDate = pet.attributes.birth_date
    // const dateConv = new Date(moment(birthDate).format('MM/DD/YYYY'))

    const birthDate = new Date(Date.parse(pet.attributes.birth_date))
    const age = (new Date().getFullYear()) - birthDate.getFullYear()
    // const age = birthDate.diff(moment(), 'years')
    return (
        <div>
            <span class="pet-name">{`${pet.attributes.name}`}</span>
            <span class="birth-date">{`Birth Date: ${pet.attributes.birth_date}`}</span>
            <span class="age">{`Age: ${age}`}</span>
        </div>
    )
}

export default Pet;