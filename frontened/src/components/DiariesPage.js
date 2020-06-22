import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadDiaries } from '../redux/actions/diariesActions'
import DiaryForm from './diaries/DiaryForm'
import DiaryList from './diaries/DiaryList'


const DiariesPage = ({ diaries, loadDiaries }) => {

    useEffect(() => {
        if (!diaries.data) {
            loadDiaries().catch(error => {
                console.log("Loading diaries failed: " + error)
            })
        }
    }, [])



    // const onChange = (event) => {
    //     const { title, value } = event.target;
    // }

    return (
        <>
            <DiaryList diaries={diaries} />
        </>
    )


}

const mapDispatchToProps = {
    loadDiaries
}

function mapStateToProps(state) {
    return {
        diaries: state.diaries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiariesPage);