import React from 'react'

class GradeFilter extends React.Component {
    render() {
        return (
            <div className="grade filter">
                <select>
                    <option>2nd Grade</option>
                    <option>3rd Grade</option>
                    <option>4th Grade</option>
                    <option>5th Grade</option>
                    <option>6th Grade</option>
                    <option>7th Grade</option>
                    <option>8th Grade</option>
                </select>
            </div>
        )
    }
}

export default GradeFilter