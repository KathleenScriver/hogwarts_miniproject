import React, { Component } from 'react'
import HogTile from './HogTile'
import HogFilter from './HogFilter'

export default class HogContainter extends Component {
    state = {
        hogs: [],
        filteredHogs: [],
        greased: 'none',
    }

    componentDidMount() {
        this.setState({
            hogs: this.props.hogs
        })
    }

    createHogs = () => {
        const hogList = this.state.greased === 'none'
        ? this.state.hogs
        : this.state.filteredHogs
        return hogList.map((hog, index) => {
            return <HogTile key={index} hog={hog} />
        })
    }

    // Need to work on the filter, hog.greased retusn a boolean and I need to copare it to a string
    handleFilterChange = (event) => {
        event.persist()
        const filterOption = event.target.value
        const newHogs = filterOption === 'none'
            ? []
            : this.state.hogs.filter(hog => {
                const check = filterOption === 'greased' ? true : false
                return hog.greased === check
            })
        this.setState({
            filteredHogs: newHogs,
            greased: filterOption,
        })
    }

    render() {
        return(
            <div id='all-hogs'>
                <HogFilter 
                    handleChange={(event) => this.handleFilterChange(event)} />
                {this.createHogs()}
            </div>
        )
    }
}