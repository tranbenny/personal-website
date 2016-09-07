import React from 'react';

/*
TODO: 
	- seperate sections into components ?
	- devise a way that reads content from a different text file or json file
		so that I can edit the text for changing content
	
*/

class ResumeContent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-md-9 col-sm-12">
				<div className="row">
					<div className="col-md-9 col-sm-12">
						<h2>Benny Tran</h2>
						<p className="lead">Software Engineer</p>
						<p>tran.benny123@gmail.com | (206)326-9583</p>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, nibh nec rutrum tristique, erat nisl tempus lacus, ac dignissim quam eros eget mi. Maecenas ornare vehicula leo quis pulvinar. Pellentesque euismod tincidunt egestas. Phasellus enim diam, mollis et lectus vitae, faucibus elementum enim. Suspendisse bibendum imperdiet ante ac placerat.</p>
						<i className="fa fa-github fa-2x" aria-hidden="true"></i>
						<i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
					</div>
				</div>

				<div className="row">
					<div className="col-md-9 col-sm-12">
						<h2>Skills</h2>
						<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, nibh nec rutrum tristique</p> 
						<ul>
							<li>Programming Languages</li>
							<li>Frameworks</li>
							<li>Web Development</li>
							<li>Data Analysis</li>
						</ul>

						<p><i className="fa fa-star" aria-hidden="true"></i> Favorite Tools:</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-md-9 col-sm-12">
						<h2>Experience</h2>
						<h4>Research Assistant</h4>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>In ornare felis consectetur sapien cursus, vel varius justo ornare.</li>
							<li>Nulla vel neque vel arcu placerat facilisis aliquet facilisis leo.</li>
						</ul>
						<h4>Web Developer Intern</h4>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>In ornare felis consectetur sapien cursus, vel varius justo ornare.</li>
							<li>Nulla vel neque vel arcu placerat facilisis aliquet facilisis leo.</li>
						</ul>

					</div>
				</div>

				<div className="row">
					<div className="col-md-9 col-sm-12">
						<h2>Education</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, nibh nec rutrum tristique, erat nisl tempus lacus, ac dignissim quam eros eget mi. Maecenas ornare vehicula leo quis pulvinar. Pellentesque euismod tincidunt egestas. Phasellus enim diam, mollis et lectus vitae, faucibus elementum enim. Suspendisse bibendum imperdiet ante ac placerat.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-md-9 col-sm-12">
						<h4>Project 1 Name</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, nibh nec rutrum tristique, erat nisl tempus lacus, ac dignissim quam eros eget mi. Maecenas ornare vehicula leo quis pulvinar. Pellentesque euismod tincidunt egestas. Phasellus enim diam, mollis et lectus vitae, faucibus elementum enim. Suspendisse bibendum imperdiet ante ac placerat.</p>
					</div>
				</div>
			</div>
		);
	}

}

export default ResumeContent;