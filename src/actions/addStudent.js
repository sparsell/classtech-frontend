
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
      .then(student => dispatch({type: 'ADD_STUDENT', payload: student}))
    }
}