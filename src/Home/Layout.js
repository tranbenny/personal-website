/* 
	TODO: make layout responsive on all screens
	- center all content
	- fix button clicking (button only works when link is clicked not button)
	- add fade out animation
	- add background image to background

	- SPLIT LAYOUT INTO COMPONENTS
*/

import React from 'react';
import { Link } from 'react-router';


// components
import NameHeader from './components/NameHeader';
import Footer from './components/Footer';


class Layout extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<NameHeader />
				<Footer />
			</div>
		);
	}

}


export default Layout;