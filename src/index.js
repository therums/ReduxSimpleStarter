import React from 'react';
import ReactDOM from 'react-dom';
// api key for youtube
const API_KEY = 'AIzaSyAPW0PBtc0rPGslcr-Ztdgv6nx-VeceIsg';

import SearchBar from './components/search_bar';

/****************************************
react - js library used to produce html
individual components or views
snippets of code that produce html
multiple different components
nested -- returning jsx
creating a new component that produces html
then make sure it gets inside the DOM 
*****************************************/
// type of a component - always one per file

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));

