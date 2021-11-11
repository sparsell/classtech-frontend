//returns an action - has to have a type property and optionally, a payload
export const addStudent = (data, history) => {
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
        .then(student => {
            dispatch({type: 'ADD_STUDENT', payload: student})
                history.push(`/grades`)
        })
    }
}