export default function studentReducer(state = [], action) {
// export default function studentReducer(state = {students: []}, action) {
// console.log(state, action)

    switch (action.type) {
        case 'ADD_STUDENT':
            return action.payload 
        default:
        return state
    }
}