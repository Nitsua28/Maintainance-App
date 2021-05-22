import React from 'react'
import './Card.css'

function Card(props) {

    const {name, bgcolor, completed} = props;

    const attributes ={
        width: `${completed}%`,
        backgroundColor: bgcolor
    }

    return (
        <div className ="cardBox">
            <h3>{`${name}`}</h3>
            <div className = 'barContainer'>
                <div className = 'barFilling' style = {attributes}>
                    <span className = 'barText'>
                        {`${completed}`}%
                    </span>
                </div>
            </div>
        
        </div>
    )
}

export default Card