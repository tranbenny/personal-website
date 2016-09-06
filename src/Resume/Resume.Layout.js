import React from 'react';
/*
TODO: add scrolling library that has dots 
- add chat icon for sending messages
- add menu item for navigation to home page 
*/


class Layout extends React.Component {

	render() {
		// FLOATING ACTION BUTTON SECTION
		return (
			<div className="container-fluid">
    <ul id="menu" className="mfb-component--br mfb-zoomin" data-mfb-toggle="hover">
      <li className="mfb-component__wrap">
        <a href="#" className="mfb-component__button--main">
          <i className="mfb-component__main-icon--resting ion-plus-round"></i>
          <i className="mfb-component__main-icon--active ion-close-round"></i>
        </a>
        <ul className="mfb-component__list">
          <li>
            <a href="https://github.com/nobitagit/material-floating-button/" data-mfb-label="View on Github" className="mfb-component__button--child">
              <i className="mfb-component__child-icon ion-social-github"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/nobitagit" data-mfb-label="Follow me on Github" className="mfb-component__button--child">
              <i className="mfb-component__child-icon ion-social-octocat"></i>
            </a>
          </li>

          <li>
            <a href="http://twitter.com/share?text=Check this material floating button component!&url=http://nobitagit.github.io/material-floating-button/&hashtags=material,design,button,css"
               data-mfb-label="Share on Twitter" className="mfb-component__button--child">
              <i className="mfb-component__child-icon ion-social-twitter"></i>
            </a>
          </li>
        </ul>
      </li>
    </ul>
	{/* RESUME SECTION */}
				<div className="resume-content">
					<div className="row">
						<div className="col-md-3 col-sm-0" id="particle-side-bar">
						</div>
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


					</div>
				{/*
					<div className="row">
						<div className="col-md-3 col-sm-0"></div>
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
						<div className="col-md-3 col-sm-0"></div>
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
						<div className="col-md-3 col-sm-0"></div>
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
						<div className="col-md-3 col-sm-0"></div>
						<div className="col-md-9 col-sm-12">
							<h2>Education</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, nibh nec rutrum tristique, erat nisl tempus lacus, ac dignissim quam eros eget mi. Maecenas ornare vehicula leo quis pulvinar. Pellentesque euismod tincidunt egestas. Phasellus enim diam, mollis et lectus vitae, faucibus elementum enim. Suspendisse bibendum imperdiet ante ac placerat.</p>
						</div>
					</div>

					<div className="row">
						<div className="col-md-3 col-sm-0"></div>
						<div className="col-md-9 col-sm-12">
							<h4>Project 1 Name</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, nibh nec rutrum tristique, erat nisl tempus lacus, ac dignissim quam eros eget mi. Maecenas ornare vehicula leo quis pulvinar. Pellentesque euismod tincidunt egestas. Phasellus enim diam, mollis et lectus vitae, faucibus elementum enim. Suspendisse bibendum imperdiet ante ac placerat.</p>
						</div>
					</div>
				*/}
				</div>
			</div>
		);
	}

	componentDidMount() {
		particlesJS.load('particle-side-bar', './assets/particles.json', function() {
  			console.log('callback - particles.js config loaded');
		});
	}

}

export default Layout;