import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadPets, createPet, deletePet } from '../redux/actions/petsActions'
import PetForm from './pets/PetForm'
import PetList from './pets/PetList'

import '../styles/NavBarStyle.css'
import '../styles/App.css'

// import DiaryForm from './diaries/DiaryForm'
// import DiaryList from './diaries/DiaryList'

// import '../styles/Pet.css'

const Home = ({ pets, loadPets, createPet, deletePet }) => {
    // useEffect takes in two arguments, a function and an array
    // it looks for state changes for anything inside the array in the second argument
    // if there are state changes it will run the function in the first argument
    // if you have an empty array, it will just run the first function once after the component mounts

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

// 1) create dairyAPI use the same apiUtil
// 2) create dairyActions, create a thunk action that does and API call, have that thunk action dispatch your LOAD_DIARIES_SUCCESS action
// 3) Update your action types with your Diary actions
// 4) Create diaries reducer
// 5) Add diaries reducer to your root reducer
// 6) Connect your diaries component to redux
// 7) mapStateToProps, mapDispatchToProps
// 7.5) useEffect so you call your loadDiaries action just once whe your component mounts
// 8) Create newDiary state
// 9) Add onChange, on Submit event handlers. 