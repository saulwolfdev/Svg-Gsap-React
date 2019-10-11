import React, { Component } from "react";
import { TweenMax, Elastic, morphSVGPlugin, TimelineLite, TimelineMax, Expo, Power4, Bounce } from "gsap/all";
import Captus1 from "../Svg/Elaboracion/Captus1.svg";
import Bandeja from "../Svg/Elaboracion/Bandeja.svg";
import s from "../Svg/Elaboracion/s.svg";
class Preloader extends Component {
	constructor(props) {
		super(props);
		this.Captus1 = React.createRef();
		this.Bandeja = React.createRef();
		this.state = {};
	}
	componentDidMount() {

		// var tl = new TimelineLite()
		// let bandeja = this.Bandeja.current
		  
		//   tl.to(bandeja, 1, { morphSVG:"#hippo"}, "+=1")
		// 	.to(bandeja, 1, { morphSVG: "#star" }, "+=1")
		// 	.to(bandeja, 1, { morphSVG: "#elephant" }, "+=1")
		// 	.to(bandeja, 1, { morphSVG: bandeja }, "+=1");
	}
	render() {
		return (
			<div className="container">
				{/* <img src={this.s} ref={this.Bandeja} lt="bandeja" /> */}
		   			<Bandeja/>
			</div>
		);
	}
}

export default Preloader;