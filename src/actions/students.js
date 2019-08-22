import uuid from 'uuid'

// ADD_STUDENT
export const addStudent = ({
    firstname = '',
    lastname = '',
    email = '',
    age = 0,
    subject = '',
    joinedAt = 0
} = {}) => ({
    type: 'ADD_STUDENT',
    student: {
        id: uuid(),
        firstname,
        lastname,
        email,
        age,
        subject,
        joinedAt
    }
})

// REMOVE_STUDENT
export const removeStudent = (id = 0) => ({
    type: 'REMOVE_STUDENT',
    id
})

// EDIT_STUDENT
export const editStudent = (id = 0, updates = {}) => ({
    type: 'EDIT_STUDENT',
    id,
    updates
})
