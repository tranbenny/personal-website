import React from 'react';

class ChatButton extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
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
		);
	}
}

export default ChatButton;