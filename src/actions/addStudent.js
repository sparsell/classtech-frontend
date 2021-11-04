
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
      .then(resp => resp.json())
      .then(data => {
          console.log(data)
        history.push(`student/${data.data.attributes.id}`)
      })
    }
}