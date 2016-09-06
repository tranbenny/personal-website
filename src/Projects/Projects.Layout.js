import React from 'react';
/* TODO: 
	- set up react router for projects
	- set up navbar scrolling
	- set up scrolling animations 
	- set up navigation links
*/

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid project-container">
				<button className="next-btn"><i className="fa fa-angle-down fa-2x" aria-hidden="true"></i></button>
				<nav>
					<button><i className="fa fa-bars" aria-hidden="true"></i></button>
				</nav>
				<div className="row project">
					<div className="col-md-8">
						<h1>Headline Visual</h1>
						<div className="project-content">
							<h3>Description</h3>
							<p>Lorem ipsum dolor sit amet, ei odio vulputate nam, 
							case utinam ad eum, suscipit urbanitas est at. 
							Te sit oportere indoctum accommodare. Simul accusamus quo et. 
							Pro cu prima graece copiosae, sit at nostrud principes deterruisset.
							</p>
							<h3>Tools</h3>
							<p>Lorem ipsum dolor sit amet, ei odio vulputate nam, 
							case utinam ad eum, suscipit urbanitas est at. 
							Te sit oportere indoctum accommodare. Simul accusamus quo et. 
							Pro cu prima graece copiosae, sit at nostrud principes deterruisset.
							</p>
						</div>

					</div>
					<div className="col-md-4">
						<img src="http://placehold.it/650x450" />
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;