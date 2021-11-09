export default function gradeReducer(state = {grades: []}, action) {
// console.log(state, action)
    switch (action.type) {
        case "FETCH_GRADES":
            return {...state, grades: action.payload}
        default:
            return state
    }
}
