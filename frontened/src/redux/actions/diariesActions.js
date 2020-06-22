import * as types from './actionTypes'
import * as diariesAPI from '../../api/diariesAPI'

export function loadDiariesSuccess(diaries) {
    return { type: types.LOAD_DIARIES_SUCCESS, diaries }
}

export function createDiarySuccess(diary) {
    return { type: types.CREATE_DIARY_SUCCESS, diary }
}

export function loadDiaries() {
    return function (dispatch) {
        return diariesAPI.getDiaries().then(diaries => {
            dispatch(loadDiariesSuccess(diaries))
        })
    }
}

export function createDiary(diary) {
    return function (dispatch) {
        return diariesAPI.saveDiary(diary).then(diary => {
            dispatch(createDiarySuccess(diary))
            return diary
        })
    }
}