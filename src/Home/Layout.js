import React from 'react';

// components
import NavBar from './components/NavBar';
import NameHeader from './components/NameHeader';
import Footer from './components/Footer';

class Layout extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="main-section">
					<div className="container-fluid">
						<h1>Benny Tran</h1>
						<p className="lead">Software Engineer specializing in blah blah blah</p>
						<ul>
							<li className="col-md-4"><button>About</button></li>
							<li className="col-md-4"><button>Projects</button></li>
							<li className="col-md-4"><button>Resume</button></li>
						</ul>
					</div>
				</div>
				<footer>
					<div className="container">
						<div className="col-md-4">
							powered by
						</div>
						<div className="col-md-4"></div>
						<div className="col-md-4 contact-icons">
							<div>
								<i className="fa fa-envelope fa-2x col-md-2" aria-hidden="true"></i>
								<p className="col-md-9">tran.benny123@gmail.com</p>
							</div>
							<div>
								<i className="fa fa-github fa-2x col-md-2" aria-hidden="true"></i>
								<p className="col-md-9">https://github.com/tranbenny</p>
							</div>
							<div>
								<i className="fa fa-linkedin-square fa-2x col-md-2" aria-hidden="true"></i>
								<p className="col-md-9">https://www.linkedin.com/in/tranbenny</p>
							</div>
							<div>
								<i className="fa fa-map-marker fa-2x col-md-2" aria-hidden="true"></i>
								<p className="col-md-9">Based in Seattle, WA</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}


export default Layout;