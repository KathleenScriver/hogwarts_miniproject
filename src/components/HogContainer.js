import React, { Component } from 'react'
import HogTile from './HogTile'
import HogFilter from './HogFilter'

export default class HogContainter extends Component {
    state = {
        hogs: [],
        greased: 'none',
    }

    componentDidMount() {
        this.setState({
            hogs: this.props.hogs
        })
    }

    filteredHogs = () => {
        const { hogs, greased } = this.state
        return greased === 'none'
            ? hogs
            : hogs.filter(hog => {
                const check = greased === 'greased' ? true : false
                return hog.greased === check
            })
    }

    createHogs = (hogList) => {
        return hogList.map((hog, index) => {
            return <HogTile key={index} hog={hog} />
        })
    }

    handleFilterChange = (event) => {
        const filterOption = event.target.value
     
        this.setState({
            greased: filterOption,
        })
    }

    render() {
        return(
            <div id='all-hogs'>
                <HogFilter 
                    handleChange={(event) => this.handleFilterChange(event)} />
                {this.createHogs(this.filteredHogs())}
            </div>
        )
    }
}