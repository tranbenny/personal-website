import React from 'react';
import { Link } from 'react-router';


// components
import NameHeader from './components/NameHeader';


class Layout extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<NameHeader />
			</div>
		);
	}

}


export default Layout;