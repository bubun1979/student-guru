import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/students" activeClassName="is-active">Students</NavLink>
        </nav>
    </header>
)

Header.defaultProps = {
    title: 'Student Guru'
}

export default Header
