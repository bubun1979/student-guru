import React, { Component } from 'react'
import StudentList from './students/StudentList'
import StudentFilters from './students/StudentFilters'

export default class StudentManagement extends Component {
    render() {
        return (
            <div>
                <StudentFilters />
                <hr />
                <StudentList />
            </div>
        )
    }
}


