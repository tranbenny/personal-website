import React from 'react';

class NavMenu extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav>
				<button><i className="fa fa-bars" aria-hidden="true"></i></button>
			</nav>
		);
	}
}

export default NavMenu;