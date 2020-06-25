import React from 'react'


const PetForm = ({ handleForm, closeForm, onChange, newPet }) => {


    return (
        <div className="pet-card">
            <div className="pet-form-open">
                <h2 className="header">Pet Information</h2>
                <form className="pet-form" onSubmit={handleForm}>
                    <input type="hidden" value={newPet.id} />
                    <div className="name-field">
                        <label>Name: </label>
                        <input type="text" name="name" onChange={onChange} value={newPet.name} />
                    </div>
                    <br />
                    <div className="birthdate-field">
                        <label>Birth Date: </label>
                        <input placeholder="YYYY/MM/DD" type="text" name="birth_date" onChange={onChange} value={newPet.birth_date} />
                    </div>
                    <br />
                    <div className="extra content">
                        <button className="btn info">{newPet.id === "" ? "Add" : "Update"}</button>
                        <button className="btn danger" onClick={closeForm}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PetForm;



