export default function fetchGradeSearch () {
    return (dispatch) => {
        fetch('http://localhost:3001/api/vi/grade/id/students')
        .then(res => res.json())
        .then(grades => dispatch({
            type: 'FETCH_GRADE_SEARCH',
            payload: grade
            //how to bring in students from this grade???
        }))
    }
}