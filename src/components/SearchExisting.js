import React from 'react'
import SchoolFilter from './SchoolFilter'
import GradeFilter from './GradeFilter'


class SearchExisting extends React.Component {
    render() {
        return (
            <div className="search-existing">
            <h2>See the results</h2>
                <div>
                    <SchoolFilter />
                </div>

                <div>
                    <GradeFilter />
            </div>
            </div>
        )

        }
    }

    export default SearchExisting