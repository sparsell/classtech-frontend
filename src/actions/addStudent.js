//returns an action - has to have a type property and optionally, a payload
export const addStudent = (data) => {
    return (dispatch) => { 
      fetch('http://localhost:3000/api/v1/students', {
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({student: data})
      })
      .then(response => response.json())
      .then(data => dispatch({type: 'ADD_STUDENT', payload: data}))
    //   .catch((error) => {
    //       console.log(error)
    // })
    }
}