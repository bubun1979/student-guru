import React from 'react'

const Student = (props) => (
    <tr>
        <td>{props.student.firstname + ' ' + props.student.lastname}</td>
        <td>{props.student.email}</td>
        <td>{props.student.age}</td>
        <td>{props.student.subject}</td>
        <td>{props.student.joinedAt}</td>
    </tr>
)

export default Student