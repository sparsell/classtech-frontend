export const incrementLikes = (state) => {
    return {
         type: 'INCREMENT_LIKES', 
         count: state.count + 1
        }
    }   
