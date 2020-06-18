// Action creator

//name export need {} in import
export const selectDiary = (diary) => {
    return {
        //return an action
        type: 'DIARY_SELECTED',
        payload: diary
    };
};