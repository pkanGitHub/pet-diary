import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function diaryReducer(state = initialState.diaries, action) {
    switch (action.type) {
        case types.LOAD_DIARIES_SUCCESS:
            return { ...action.diaries }
        case types.CREATE_DIARY_SUCCESS:
            return { data: [...state.data, action.diary.data] }
        default:
            return state
    }
}