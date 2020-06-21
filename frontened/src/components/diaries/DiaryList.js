import React from 'react'

const DiaryList = () => {
    return (
        <>
            <div class="add-diary-btn">
                <button class="default btn">Add Diary</button>
            </div>
            <div class="diary-list-container">
                <div>
                    <span class="diary-title">Micki First Time Home</span>
                    <span class="published-date">Published Date: 2014/01/12</span>
                </div>
                <div>
                    <p class="diary-post">She is excited exploring around the house and dooking along the way</p>
                </div>
            </div>
        </>
    )
}

export default DiaryList;