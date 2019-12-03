import React, { Component } from 'react'
import HogTile from './HogTile'
import HogFilter from './HogFilter'
import HogSearch from './HogSearch'

export default class HogContainter extends Component {
    state = {
        hogs: [],
        greasedFilter: 'none',
        nameSearch: '',
    }

    componentDidMount() {
        this.setState({
            hogs: this.props.hogs
        })
    }

    filteredHogs = () => {
        const { hogs, greasedFilter, nameSearch } = this.state

        const searchedHogs = nameSearch === '' ? hogs : this.searchHogs()

        return greasedFilter === 'none'
            ? searchedHogs
            : searchedHogs.filter(hog => {
                const check = greasedFilter === 'greased' ? true : false
                return hog.greased === check
            })
    }

    searchHogs = () => {
        const { hogs, nameSearch } = this.state

        return hogs.filter(hog =>
            hog.name.toLowerCase().includes(nameSearch)
        )
    }

    createHogs = (hogList) => {
        return hogList.map((hog, index) => {
            return <HogTile key={index} hog={hog} />
        })
    }

    handleFilterChange = (event) => {
        const filterOption = event.target.value
     
        this.setState({
            greasedFilter: filterOption,
        })
    }

    handleSearchChange = (search_input) => {
        this.setState({
            nameSearch: search_input 
        })
    }

    render() {
        return(
            <div id='all-hogs'>
                <HogFilter handleChange={(event) => this.handleFilterChange(event)} />
                <HogSearch handleSearch={(input) => this.handleSearchChange(input)} />
                {this.createHogs(this.filteredHogs())}
            </div>
        )
    }
}