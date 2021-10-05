import React from 'react'

class SchoolFilter extends React.Component {

    render() {
        return (
            <div className="school filter">
                
                <h3>School:</h3>
                    <div className="school field">
                        <select name="type"
                                id="type">
                            <option>Parkway</option>
                            <option>Glenville</option>
                            <option>Whitby</option>
                            <option>Riverside</option>
                            <option>Western Middle</option>
                            <option>Central Middle</option>
                            <option>Eastern Middle</option>
                            <option>GCDS</option>
                            <option>Sacred Heart</option>
                        </select>
                    </div>
            </div>
            )
        }
    }





export default SchoolFilter
