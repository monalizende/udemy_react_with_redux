//import react and react DOM library
import React from 'react';
import ReactDOM from 'react-dom';

//import react component
const App = () => {
    return <div>Hello World</div>
}

//render react component on screen
ReactDOM.render(<App/>, document.querySelector('#root'));