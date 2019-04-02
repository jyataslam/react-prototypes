import React from 'react';

export default props => {
    const { info } = props;
    console.log(info);
    return (
        <div>
            <img src={info['im:image'][2].label} alt="movie image"/>
            <h3>{info['im:name'].label}</h3>
            <p>{info.summary.label}</p>
        </div>
    )
}