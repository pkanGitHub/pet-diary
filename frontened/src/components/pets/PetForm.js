import React from 'react'


const PetForm = ({ handleForm, closeForm, onChange, newPet }) => {


    return (
        <div class="pet-card">
            <div class="pet-form-open">
                <h2 class="header">Pet Information</h2>
                <form class="pet-form" onSubmit={handleForm}>
                    <div class="name-field">
                        <label>Name: </label>
                        <input type="text" name="name" onChange={onChange} value={newPet.name} />
                    </div>
                    <br />
                    <div class="birthdate-field">
                        <label>Birth Date: </label>
                        <input placeholder="mm/dd/yyyy" type="text" name="birth_date" onChange={onChange} value={newPet.birth_date} />
                    </div>
                    <br />
                    <div class="extra content">
                        <button class="btn info">Add</button>
                        <button class="btn danger" onClick={closeForm}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PetForm;



