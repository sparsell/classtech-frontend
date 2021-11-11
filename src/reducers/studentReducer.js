export default function studentReducer(state = [], action) {
// export default function studentReducer(state = {students: []}, action) {
// console.log(state, action)

    switch (action.type) {
        case 'ADD_STUDENT':
            return action.payload 
        // case 'GET_STUDENTS':
        //       return {...state, students: [...state.data.students, action.payload]}
            // return action.payload 
        default:
        return state
    }
}