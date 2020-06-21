import React from 'react'

const PetForm = (props) => {


    return (
        <div class="pet-card">
            <div class="pet-form-open">
                <h2 class="header">Pet Information</h2>
                <form class="pet-form">
                    <div class="name-field">
                        <label>Name: </label>
                        <input type="text" />
                    </div>
                    <br />
                    <div class="birthdate-field">
                        <label>Birth Date: </label>
                        <input placeholder="mm/dd/yyyy" type="text" />
                    </div>
                    <br />
                    <div class="extra content">
                        <button class="btn info">Add</button>
                        <button class="btn danger">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PetForm;



