import React from 'react'
import Diary from './Diary'

const DiaryList = ({ diaries }) => {
    return (
        <div>
            <div class="add-diary-btn">
                <button class="default btn">Add Diary</button>
            </div>
            <div class="diary-list-container">
                {diaries.data && diaries.data.map(diary => {
                    return <Diary diary={diary} />
                })}
            </div>
        </div>
    )
}

export default DiaryList;