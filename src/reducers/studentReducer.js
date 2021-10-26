// keeps track of all students

export default function studentReducer(state = {students: []}, action) {
    debugger
    switch (action.type) {
        case 'FETCH_STUDENTS':
            return state 
        default:
        return state
    }
}