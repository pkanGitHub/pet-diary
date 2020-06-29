import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadPets, createPet, deletePet } from '../redux/actions/petsActions'
import PetForm from './pets/PetForm'
import PetList from './pets/PetList'

const Home = ({ pets, loadPets, createPet, deletePet }) => {

    useEffect(() => {
        loadPets().catch(error => {
            console.log("Loading pets failed: " + error)
        })
    }, [loadPets])

    const [popOut, setPopOut] = useState(false)
    const [newPet, setNewPet] = useState({
        id: "",
        name: "",
        birth_date: ""
    })

    const closeForm = (event) => {
        event.preventDefault();
        setNewPet({
            id: "",
            name: "",
            birth_date: ""
        })
        setPopOut(!popOut);
    }

    const handleForm = (event) => {
        event.preventDefault();
        createPet(newPet).then(pet => {
            if (pet.data) setNewPet({ name: "", birth_date: "" })
        })
        // dispatch an action with the newPet data
        // This will make an API call
        // Update our store
    }

    const onChange = (event) => {
        // const name = event.target.name 
        // const value = event.target.value
        const { name, value } = event.target;
        setNewPet({ ...newPet, [name]: value })
    }


    return (
        <>
            {/* <div>{newPet.name}</div>
            <div>{newPet.birth_date}</div> */}
            <div className="pet-flex">
                < PetList
                    pets={pets}
                    popOut={popOut}
                    setPopOut={setPopOut}
                    setNewPet={setNewPet}
                    deletePet={deletePet}
                />
                <div style={{ width: "400px" }}>
                    {popOut && < PetForm
                        handleForm={handleForm}
                        closeForm={closeForm}
                        onChange={onChange}
                        newPet={newPet}
                    />}
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    loadPets,
    createPet,
    deletePet
}

function mapStateToProps(state) {
    return {
        pets: state.pets
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
