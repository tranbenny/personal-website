import React from 'react';
/*
TODO: 
- add silver line seperating sections of resume
- add chat icon for sending messages
- add menu item for navigation to home page 

- add circles with icons next to titles: about, experience, education, etc.
- put picture, contact info on the side bar? 

- make black bar on top for responsivness

*/

// components
import ChatButton from '../components/ChatButton';
import ResumeContent from './components/ResumeContent';
import SideBar from './components/SideBar';


class Layout extends React.Component {

	render() {
		return (
			<div className="container-fluid">
			<ChatButton />
				<div className="resume-content">
					<div className="row">
						<SideBar />
						<ResumeContent />
					</div>
				</div>
			</div>
		);
	}

}

export default Layout;