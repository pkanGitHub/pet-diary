import React from 'react'
import SelectPet from './SelectPet'

const DiaryForm = ({ handleForm, onChange, newDiary, pets }) => {
    return (
        <div className="diary-card">
            <form className="diary-form" onSubmit={handleForm}>
                < SelectPet selectorValue={newDiary.id} onChange={onChange} pets={pets} />
                <div className="diary-form-container">
                    <div className="title">
                        <label>Title: </label>
                        <input type="text" name="title" onChange={onChange} value={newDiary.title} />
                    </div>
                    <div className="diary-post">
                        <label>Diary: </label>
                        <input type="text" name="post" placeholder="What Happened Today?" onChange={onChange} value={newDiary.post} />
                    </div>
                </div>
                <button className="info-create btn">Publish</button>
            </form>
        </div >
    )
}

export default DiaryForm;