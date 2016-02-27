import React from 'react';
import ReactDOM from 'react-dom';

/****************************************
react - js library used to produce html
individual components or views
snippets of code that produce html
multiple different components
nested -- returning jsx
creating a new component that produces html
then make sure it gets inside the DOM 
*****************************************/
// type of a component

const App = () => {
	return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));

