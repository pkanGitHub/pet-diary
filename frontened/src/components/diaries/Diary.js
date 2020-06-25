import React from 'react'

const Diary = ({ diary }) => {

        const publishedDate = new Date(Date.parse(diary.attributes.created_at))
        const year = publishedDate.getFullYear()
        const month = publishedDate.getMonth() + 1 //month start with 0
        const day = publishedDate.getDate()
        const formattedDate = `${month}/${day}/${year}`

        return (
                <div className="diary-container">
                        <div className="flex-container">
                                <span className="diary-title">{diary.attributes.title}</span>
                                <span className="published-date">{`Published Date: ${formattedDate}`}</span>
                        </div>
                        <div>
                                <p className="diary-post">{diary.attributes.post}</p>
                        </div>
                </div>
        )
}

export default Diary;
