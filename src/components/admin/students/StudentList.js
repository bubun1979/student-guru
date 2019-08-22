import React from 'react'
import { connect } from 'react-redux'
import Student from './Student'
import studentSelector from '../../../selectors/students'

const StudentList = (props) => (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Subject</th>
                    <th>Joined At</th>
                </tr>
            </thead>
            <tbody>
            {props.students.map((student) => {
                return (
                    <Student 
                        key={student.id}
                        student={student}
                    />
                )
            })}
            </tbody>
        </table>
        
    </div>
)

const mapStateToProps = (state) => {
    return {
        students: studentSelector(state.students, state.studentFilters) 
    }
}

export default connect(mapStateToProps)(StudentList)