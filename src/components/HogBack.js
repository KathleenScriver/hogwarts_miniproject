import React from 'react'

const HogBack = (props) => {
    const { name, specialty, greased, weight } = props.hog;
    const highestMedal = props.hog['highest medal achieved']

    return (
        <div>
            <p>Name: {name}</p>
            <p>Specialty: {specialty}</p>
            <p>Greased: {`${greased}`}</p>
            <p>Weight: {weight}</p>
            <p>Highest Medal Achieved: {highestMedal}</p>
        </div>
    )
}

export default HogBack;