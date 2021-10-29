export function fetchStudents() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/students')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(students => dispatch({
                type: 'FETCH_STUDENTS',
                payload: students,
            }))
    }
}