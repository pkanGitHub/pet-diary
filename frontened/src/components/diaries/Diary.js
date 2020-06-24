import React from 'react'

const Diary = ({ diary }) => {

        const publishedDate = new Date(Date.parse(diary.attributes.created_at))
        const year = publishedDate.getFullYear()
        const month = publishedDate.getMonth() + 1 //month start with 0
        const day = publishedDate.getDate()
        const formattedDate = `${month}/${day}/${year}`

        return (
                <div class="diary-container">
                        <div class="flex-container">
                                <span class="diary-title">{diary.attributes.title}</span>
                                <span class="published-date">{`Published Date: ${formattedDate}`}</span>
                        </div>
                        <div>
                                <p class="diary-post">{diary.attributes.post}</p>
                        </div>
                </div>
        )
}

export default Diary;
