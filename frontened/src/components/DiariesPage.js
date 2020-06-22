import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadDiaries, createDiary } from '../redux/actions/diariesActions'
import DiaryForm from './diaries/DiaryForm'
import DiaryList from './diaries/DiaryList'


const DiariesPage = ({ diaries, loadDiaries, createDiary }) => {

    useEffect(() => {
        if (!diaries.data) {
            loadDiaries().catch(error => {
                console.log("Loading diaries failed: " + error)
            })
        }
    }, [])

    const [popOut, setPopOut] = useState(false)
    const [newDiary, setNewDiary] = useState({
        pet_id: "1",
        title: "",
        post: ""
    })

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
        const { name, value } = event.target;
        setNewDiary({ ...newDiary, [name]: value })
    }

    return (
        <>
            <div>{newDiary.title}</div>

            <div>
                {popOut && <DiaryForm
                    handleForm={handleForm}
                    onChange={onChange}
                    newDiary={newDiary}
                />}
                <DiaryList diaries={diaries} closeForm={closeForm} />
            </div>
        </>
    )


}

const mapDispatchToProps = {
    loadDiaries,
    createDiary
}

function mapStateToProps(state) {
    return {
        diaries: state.diaries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiariesPage);