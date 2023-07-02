import React from 'react'

export default function Heading(props) {
    return (
        <div className="heading">
            <h2>{props.title}</h2>
            <div className="line"></div>
            <p className="heading-para">{props.paragraph}</p>
        </div>
    );
};