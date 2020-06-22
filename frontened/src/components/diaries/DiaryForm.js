import React from 'react'

const DiaryForm = ({ handleForm, onChange, newDiary }) => {
    return (
        <div class="diary-card">
            <form class="diary-form" onSubmit={handleForm}>
                <select name="pets" id="pets" class="pet-option">
                    <option class="options" value="select-pet">Select Pet</option>
                </select>
                <div class="diary-form-container">
                    <div class="title">
                        <label>Title: </label>
                        <input type="text" name="title" onChange={onChange} value={newDiary.title} />
                    </div>
                    <div class="diary-post">
                        <label>Diary: </label>
                        <input type="text" name="post" placeholder="What Happened Today?" onChange={onChange} value={newDiary.post} />
                    </div>
                </div>
                <button class="info-create btn">Publish</button>
            </form>
        </div>
    )
}

export default DiaryForm;