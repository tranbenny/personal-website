import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="row contact-icons">
						<div>
							<i className="fa fa-map-marker fa-2x col-md-2" aria-hidden="true"></i>
							<p className="col-md-9">Based in Seattle, WA</p>
						</div>
						<div>
							<a href="https://github.com/tranbenny">
								<i className="fa fa-github fa-2x col-md-2" aria-hidden="true"></i>
								<p className="col-md-9">tranbenny</p>
							</a>
						</div>
						<div>
							<a href="https://www.linkedin.com/in/tranbenny">
								<i className="fa fa-linkedin-square fa-2x col-md-2" aria-hidden="true"></i>
								<p className="col-md-9">tranbenny</p>
							</a>
						</div>
						<div>
							<i className="fa fa-envelope fa-2x col-md-2" aria-hidden="true"></i>
							<p className="col-md-9">tran.benny123@gmail.com</p>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;