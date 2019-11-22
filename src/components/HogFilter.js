import React from 'react'

const HogFilter = ({ handleChange }) => {
    return (
        <form onChange={(e) => handleChange(e)}>
            <label>
                <input 
                    type='radio'
                    name='filter'
                    value='none'
                    defaultChecked
                />
                Remove Filter
            </label>

            <label>
                <input 
                    type='radio'
                    name='filter'
                    value='greased'
                />
                Greased
            </label>

            <label>
                <input 
                    type='radio'
                    name='filter'
                    value='ungreased'
                />
                Ungreased
            </label>

        </form>
    )
}

export default HogFilter