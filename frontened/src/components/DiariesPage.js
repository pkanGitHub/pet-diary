import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadDiaries, createDiary } from '../redux/actions/diariesActions'
import DiaryForm from './diaries/DiaryForm'
import DiaryList from './diaries/DiaryList'
import { loadPets } from '../redux/actions/petsActions'
import SelectPet from './diaries/SelectPet'


const DiariesPage = ({ diaries, loadDiaries, createDiary, pets, loadPets }) => {
    // when redux updates, all react components that use the specific data updates as well
    useEffect(() => {
        loadDiaries().catch(error => {
            console.log("Loading diaries failed: " + error)
        })
        loadPets().catch(error => {
            console.log("Loading pets failed: " + error)
        })

    }, [loadDiaries, loadPets])

    const [popOut, setPopOut] = useState(false)
    const [newDiary, setNewDiary] = useState({
        pet_id: "",
        title: "",
        post: ""
    })
    const [selectedPet, setSelectedPet] = useState(null)

    const closeForm = (event) => {
        event.preventDefault();
        setPopOut(!popOut);
    }

    const handleForm = (event) => {
        event.preventDefault();
        createDiary(newDiary).then(diary => {
            if (diary.data) setNewDiary({ title: "", post: "" })
        })
    }

    const onChange = (event) => {
        // console.log(event.target.value)
        const { name, value } = event.target;
        setNewDiary({ ...newDiary, [name]: value })
    }

    const changePetFilter = (event) => {
        setSelectedPet(event.target.value)
    }

    const filterDiariesByPetID = (petID = null) => {
        // console.log(petID)
        if (petID) return diaries.data.filter(diary => diary.attributes.pet_id === +petID)
        return diaries.data
    }

    return (
        <>
            {pets.data && < SelectPet pets={pets.data} onChange={changePetFilter} selectorValue={selectedPet} />}
            <div className="diaries-flex">
                {diaries.data && <DiaryList diaries={filterDiariesByPetID(selectedPet)} closeForm={closeForm} />}
                {popOut && <DiaryForm
                    handleForm={handleForm}
                    onChange={onChange}
                    newDiary={newDiary}
                    pets={pets.data}
                />}
            </div>
        </>
    )


}

const mapDispatchToProps = {
    loadDiaries,
    loadPets,
    createDiary
}

function mapStateToProps(state) {
    return {
        diaries: state.diaries,
        pets: state.pets
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiariesPage);