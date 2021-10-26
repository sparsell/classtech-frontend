
export function fetchGrades() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/grades')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(grades => dispatch({
                type: 'FETCH_GRADES',
                payload: grades,
            }))
        }
}
