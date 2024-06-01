import React from 'react';
import ReactDOM from 'react-dom';
import SecondCounter from './component/SecondCounter';

let counter = 0;

setInterval(function () {
    const digitFourth = Math.floor(counter / 1000) % 10;
    const digitThird = Math.floor(counter / 100) % 10;
    const digitSecond = Math.floor(counter / 10) % 10;
    const digitFirst = Math.floor(counter / 1) % 10;
    counter++;
    
    ReactDOM.render(
        <SecondCounter
            digitFirst={digitFirst}
            digitSecond={digitSecond}
            digitThird={digitThird}
            digitFourth={digitFourth}
        />, document.querySelector("#app")
    );
}, 1000);

