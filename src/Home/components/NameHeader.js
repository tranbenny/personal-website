import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class NameHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="main-section" id="particles-js">
				<div className="container-fluid">
					<h1 className="name-header">Hi I'm <span className="blue">Benny Tran</span></h1>
					<div className="mobile-name-header">
						<h1>Hi I'm</h1>
						<h1 className="blue">Benny Tran</h1>
					</div>
					<p className="lead">
						A full-stack software developer with experience in web development and scientific computing. 
					</p>
					<p className="lead">I'm currently looking for full-time opportunities as a software engineer</p>
					<p className="lead">View my resume <a href="/assets/resume.pdf" className="blue">here</a>!</p>
					<p className="lead">Contact me at tran.benny123@gmail.com or reach out at:</p>
					<div className="icon-label">
						<i className="fa fa-github fa-2x" aria-hidden="true"></i>
						<p>https://github.com/tranbenny</p>
					</div>
					<div className="icon-label">
						<i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
						<p>https://www.linkedin.com/in/tranbenny</p>
					</div>

				</div>
			</div>
		);
	}

	componentDidMount() {
		$('.icon-label').each((index, element) => {
			$(element).on('click', (event) => {
				var url = $(element).children('p')[0].textContent;
				window.location.href = url;
			});
		});
		
		particlesJS.load('particles-js', './assets/particles.json', function() {
			$('#particles-js').css({
				'background-image':'none'
			});
		});
		
		
		
		
	}

}

export default NameHeader;