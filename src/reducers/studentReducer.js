export default function studentReducer(state = {students: []}, action) {

    switch (action.type) {
        case 'ADD_STUDENT':
            return {...state, students: [...state.accounts, action.payload]}
        default:
        return state
    }
}