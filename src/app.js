import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import { addStudent } from './actions/students'
import { setTextFilter } from './actions/studentFilters'
import studentSelector from './selectors/students'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import configureStore from './store/configureStore';

const store = configureStore()

const studentOne = store.dispatch(addStudent({
    firstname: 'Soumyajit',
    lastname: 'Ghosh',
    email: 'soumya@gmail.com',
    age: 40,
    subject: 'Mathematics',
    joinedAt: 458
}))

const studentTwo = store.dispatch(addStudent({
    firstname: 'Pallabi',
    lastname: 'Karmakar',
    email: 'pallabi@gmail.com',
    age: 34,
    subject: 'Physics',
    joinedAt: 385
}))

const studentThree = store.dispatch(addStudent({
    firstname: 'Manojit',
    lastname: 'Ghosh',
    email: 'manojit@gmail.com',
    age: 35,
    subject: 'Chemistry',
    joinedAt: 556
}))

/* store.dispatch(setTextFilter('ist'))
const storeState = store.getState()
console.log(storeState.students)
const selector = studentSelector(storeState.students, storeState.studentFilters)
console.log('Filtered result')
console.log(selector) */

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))