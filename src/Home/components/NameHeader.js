import React from 'react';
import { Link } from 'react-router';

class NameHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="nameHeader">
				<h1 id="name">Benny Tran</h1>
				<div className="col-md-8">
					<ul id="view-list">
						<li><a><Link to="/">Web Page</Link></a></li>
						<li><a>Terminal</a></li>
						<li><a>Data Visual</a></li>
						<li><a>AI Assistant</a></li>
					</ul>
				</div>
			</div>
		);
	}

}

export default NameHeader;