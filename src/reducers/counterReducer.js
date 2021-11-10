export default function counterReducer(state = {count: 0}, action) {

    if(action.type === "INCREASE_LIKES") {
        return {
            count: state.count + 1
        }
         return state
    }
    

    // switch (action.type) {
    //     case "INCREASE_LIKES":
    //         return console.log('adding another like')
        //    return { count: state.count + 1 };
    //     default:
    //         return state
    // }

}