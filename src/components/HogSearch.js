import React, { Component } from 'react'

export default class HogSearch extends Component {
    state = {
        search_input: ''
    }

    handleChange = (event) => {
        const newInput = event.target.value
        this.setState({
            search_input: newInput
        })
        this.props.handleSearch(newInput)
    }

    render() {
        return (
            <form id='name-search'>
                <label>Search by Name:</label>
                <input 
                    type='text'
                    value={this.state.search_input}
                    onChange={this.handleChange} />
            </form>
        )
    }
}
