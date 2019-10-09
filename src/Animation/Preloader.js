import React, { Component } from "react";
import { TweenMax,Elastic, TimelineMax,Expo,Power4,Bounce} from "gsap/all";
class Preloader extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() {
		return (
			<div className="container">
					<h1>Preloader</h1>
			</div>
		);
	}
}

export default Preloader;