export default (students, {text, sortBy, startDate, endDate}) => {
    return students.filter((student) => {
        const startDateMatch = typeof startDate != 'number' || student.joinedAt >= startDate
        const endDateMatch = typeof endDate != 'number' || student.joinedAt <= endDate
        const textMatch = text.length == 0 
            || student.firstname.toLowerCase().includes(text.toLowerCase())
            || student.lastname.toLowerCase().includes(text.toLowerCase())
            || student.email.toLowerCase().includes(text.toLowerCase())
            || student.subject.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    })
}

