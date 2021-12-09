export default function gradeReducer(state = [], action) {
console.log(state, action)
    switch (action.type) {
        case "FETCH_GRADES":
            return action.payload
                // ...state
                // grades: action.payload
            // }
        // case 'ADD_STUDENT':
        //     return {...state, student: action.payload
        //     }
        default:
        return state
    }
}