import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="row" id="footer">
				<div className="col-md-5">
					<div className="row">
						<p>Based in Seattle, WA</p>
						<div id="icons">
							<i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
							<i className="fa fa-github fa-2x" aria-hidden="true"></i>
							<i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
						</div>
					</div>
				</div>
				<div className="col-md-5"></div>
			</div>
		)
	}
}

export default Footer;