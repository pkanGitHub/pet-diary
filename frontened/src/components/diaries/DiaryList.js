import React from 'react'
import Diary from './Diary'

const DiaryList = ({ diaries, closeForm }) => {
    return (
        <div className="dairies-list-flex">
            <div className="add-diary-btn">
                <button className="default btn" onClick={closeForm}>Add Diary</button>
            </div>
            <div className="diary-list-container">
                {diaries.map(diary => {
                    return <Diary diary={diary} />
                })}
            </div>
        </div>
    )
}

export default DiaryList;