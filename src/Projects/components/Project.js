import React from 'react';

/* 
	TODO: 
	- need to configure state properties for project headers and description
	
*/


class Project extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
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
					<div className="image-holder">
						<div id="image-placeholder"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;