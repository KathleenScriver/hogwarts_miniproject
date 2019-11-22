import React, { Component } from 'react'
import HogFront from './HogFront'
import HogBack from './HogBack'

export default class HogTile extends Component {
    state = {
        cardFace: 'front'
    }

    handleClick = () => {
        const newFace = this.state.cardFace === 'front'
                    ? 'back'
                    : 'front'
        this.setState({
            cardFace: newFace
        })
    }

    displayTile = () => {
        return this.state.cardFace === 'front'
            ? <HogFront hog={this.props.hog} />
            : <HogBack hog={this.props.hog} />
    }

    render() {
        return (
            <div className='pigTile' onClick={this.handleClick}>
                {this.displayTile()}
            </div>
        )
    }
}