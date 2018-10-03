import React from 'react';

const Card = (props) => {
    return (
        <div>
            <img width="75" src={props.avatar_url} style={{marginLeft: 0}}/>
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontsize: '1.50em'}}>{props.login}</div>
                <div style={{fontsize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
                <div>{props.company}</div>
                <div>{props.id}</div>
            </div>
        </div>
    )
};

export default Card;