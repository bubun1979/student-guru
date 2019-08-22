import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../../../actions/studentFilters'


class StudentFilters extends Component {
    constructor (props) {
        super (props)
        this.onTextChange = this.onTextChange.bind(this)

    }
    onTextChange (e) {
        const searchKey = e.target.value
        this.props.dispatch(setTextFilter(searchKey))
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.onTextChange} placeholder="Search Students"  />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    studentFilters: state.studentFilters
})

export default connect(mapStateToProps)(StudentFilters)
