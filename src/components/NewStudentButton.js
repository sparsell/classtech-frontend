import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import NewStudentForm from './NewStudentForm'

const NewStudentButton = () => {
    return (
        <div>
            <Link to={'/students/new'}><button className="ui primary button"> Add a new Student</button></Link>
            {/* <Route path="/students/new">
            <NewStudentForm />
          </Route> */}
          {/* <Link to="/students/new" component={NewStudentForm} /> */}

          <Switch>
            <Route exact path={"/students/new"} component={NewStudentForm} />
        </Switch>

        </div>
    )
}

export default NewStudentButton