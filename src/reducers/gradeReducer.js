// export default function gradeReducer(state = {grades: []}, action) {
export default function gradeReducer(state = [], action) {
// console.log(state, action)
    switch (action.type) {
        case "FETCH_GRADES":
            return action.payload
        default:
        return state
    }
}
