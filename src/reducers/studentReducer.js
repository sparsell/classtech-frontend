// keeps track of all students

export default function studentReducer(state = {students: []}, action) {
    // debugger

    switch (action.type) {
        // case 'ADD_STUDENT':
        //     return state 
        // case 'DELETE_STUDENT':
        //     return state 
        // case 'EDIT_STUDENT':
        //     return state 
        case "FETCH_STUDENTS":
            return {
                ...state,
                students: action.payload
            }
        default:
        return state
    }
}