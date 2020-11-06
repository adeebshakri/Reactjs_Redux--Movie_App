import React from 'react'
import spinner from './spin.png'

export default function Spinner() {
    return (
        <div>
            <img src={spinner}
                style={{ width: '200px', margin: 'auto', display: 'block' }}
                alt="Loading..." />
        </div>
    )
}
