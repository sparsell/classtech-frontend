// import { combineReducders, combineReducers } from 'redux'

export default function gradeReducer(state = {grades: []}, action) {

    switch (action.type) {
        case "FETCH_GRADES":
            return {
                ...state,
                grades: action.payload
            }
        default:
        return state
    }
}
