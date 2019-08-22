const studentDefaultState = []

export default (state = studentDefaultState, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return state.concat(action.student)
        case 'REMOVE_STUDENT':
            return state.filter((student) => student.id !== action.id)
        case 'EDIT_STUDENT':
            return state.map((student) => {
                if (student.id == action.id) {
                    return {
                        ...student,
                        ...action.updates
                    }
                } else {
                    return student
                }
            })
        default: 
            return state
    }
}