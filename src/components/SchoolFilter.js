import React from 'react'

class SchoolFilter extends React.Component {

    render() {
        return (
            <select name="type"
                    id="type">
                <option value="" disabled selected>Select school</option>
                <option>North Street</option>
                <option>Riverside</option>
                <option>Parkway</option>
                <option>Glenville</option>
                <option>Western Middle</option>
                <option>Central Middle</option>
                <option>Eastern Middle</option>
            </select>
            )
        }
    }

export default SchoolFilter
