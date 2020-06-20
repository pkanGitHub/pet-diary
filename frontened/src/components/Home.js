import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadPets } from '../redux/actions/petsActions'
const Home = ({ pets, loadPets }) => {
    // useEffect takes in two arguments, a function and an array
    // it looks for state changes for anything inside the array in the second argument
    // if there are state changes it will run the function in the first argument
    // if you have an empty array, it will just run the first function once after the component mounts

    useEffect(() => {
        if (!pets.data) {
            loadPets().catch(error => {
                console.log("Loading pets failed: " + error)
            })
        }
    }, [])

    return (
        <>
            {/* <PetsList pets={pets.data} /> */}
            {pets.data && pets.data.map(pet => {
                return <div>{pet.attributes.name}</div>
            })}
        </>
    )
}

const mapDispatchToProps = {
    loadPets
}

function mapStateToProps(state) {
    return {
        pets: state.pets
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

