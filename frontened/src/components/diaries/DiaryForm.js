import React from 'react'

const DiaryForm = () => {
    return (
        <div class="diary-card">
            <h2 class="diary-header">Write New Diary</h2>
            <form class="diary-form">
                <select name="pets" id="pets" class="pet-option">
                    <option class="options" value="select-pet">Select Pet</option>
                </select>
                <div class="diary-container">
                    <div class="title">
                        <label>Title: </label>
                        <input type="text" />
                    </div>
                    <div class="diary-post">
                        <label>Diary: </label>
                        <input type="text" placeholder="What Happened Today?" />
                    </div>
                </div>
                <button class="info-create btn">Publish</button>
            </form>
        </div>
    )
}

export default DiaryForm;