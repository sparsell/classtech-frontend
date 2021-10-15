import React from 'react'

class SchoolFilter extends React.Component {

    render() {
        return (
//             {this.props.categories((items , index)=>{
//   <option key{index}>{items.categoryName} </option>
// })}
            <div className="block-example">
                <h3>School:</h3>
                        <select name="type"
                                id="type">
                            <option>Parkway</option>
                            <option>Glenville</option>
                            <option>Western Middle</option>
                            <option>Central Middle</option>
                            <option>Eastern Middle</option>
                        </select>
            </div>
            )
        }
    }





export default SchoolFilter
