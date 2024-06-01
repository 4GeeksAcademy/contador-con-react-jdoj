import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


function SecondCounter(props) {
    return (
        <div className="bigCounter d-flex justify-content-center bg-black text-white fs-1">
            <div className="calendar p-3 m-3 border-black bg-dark"><FontAwesomeIcon icon={faClock} /></div>
            <div className="four p-3 m-3 border-black bg-dark">{props.digitFourth}</div>
            <div className="three p-3 m-3 border-black bg-dark">{props.digitThird}</div>
            <div className="two p-3 m-3 border-black bg-dark">{props.digitSecond}</div>
            <div className="one p-3 m-3 border-black bg-dark">{props.digitFirst}</div>
        </div>
    );
}

SecondCounter.propTypes = {
    digitFourth: PropTypes.number,
    digitThird: PropTypes.number,
    digitSecond: PropTypes.number,
    digitFirst: PropTypes.number
};



export default SecondCounter;
