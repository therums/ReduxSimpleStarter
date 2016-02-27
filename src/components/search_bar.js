import React, { Component } from 'react';

// the functional component to a class component
// class (name of component) and extends to react functionality
// must always render or will error
class SearchBar extends Component {
	render() {
		return <input />;
	}
}

// now to render to the html
// index needs a reference for this file
// exporting only searchbar component
export default SearchBar;
