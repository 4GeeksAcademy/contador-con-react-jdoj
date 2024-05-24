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

let counter = 0;
setInterval(function () {
    const digitFourth = Math.floor(counter / 1000) % 10;
    const digitThird = Math.floor(counter / 100) % 10;
    const digitSecond = Math.floor(counter / 10) % 10;
    const digitFirst = Math.floor(counter / 1) % 10;
    counter++;
    console.log(digitFourth, digitThird, digitSecond, digitFirst);
    
    ReactDOM.render(
        <SecondCounter
            digitFirst={digitFirst}
            digitSecond={digitSecond}
            digitThird={digitThird}
            digitFourth={digitFourth}
        />, document.querySelector("#app")
    );
}, 1000);

export default SecondCounter;
