import React from 'react'

const GradeFilter = () => {
    return (
            <select>
                <option value="" disabled selected>Select Your Grade</option>
                <option value="2">2nd Grade</option>
                <option value="3">3rd Grade</option>
                <option value="4">4th Grade</option>
                <option value="5">5th Grade</option>
                <option value="6">6th Grade</option>
                <option value="7">7th Grade</option>
                <option value="8">8th Grade</option>
            </select>
    )
}

// class GradeFilter extends React.Component {
//     render() {
//         return (
//             <div>
//                 <form>
//                     <select>
//                         <option value="" disabled selected>Select grade</option>
//                         <option>2nd Grade</option>
//                         <option>3rd Grade</option>
//                         <option>4th Grade</option>
//                         <option>5th Grade</option>
//                         <option>6th Grade</option>
//                         <option>7th Grade</option>
//                         <option>8th Grade</option>
//                     </select>
//                 </form>
//             </div>
//         )
//     }
// }

export default GradeFilter