import { createStore, combineReducers } from 'redux'
import studentReducers from '../reducers/students'
import studentFilterReducers from '../reducers/studentFilters'

export default () => {
    const store = createStore(
        combineReducers({
            students: studentReducers,
            studentFilters: studentFilterReducers
        })
    )
    return store
}