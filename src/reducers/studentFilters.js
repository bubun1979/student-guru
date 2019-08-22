const filterDefaultState = {
    text: '',
    sortBy: 'date', //date name age subject
    startDate: undefined,
    endDate: undefined
}

export default (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            }
        case 'SORT_BY_AGE':
            return {
                ...state,
                sortBy: 'age'
            }
        case 'SORT_BY_SUBJECT':
            return {
                ...state,
                sortBy: 'subject'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state
    }
}