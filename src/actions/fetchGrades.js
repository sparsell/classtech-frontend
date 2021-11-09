
export default function fetchGrades() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/grades')
            .then(res => res.json())
            .then(grades => dispatch({
                type: 'FETCH_GRADES',
                payload: grades
                }))
    }
}