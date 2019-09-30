import React, { Component } from "react";
import { TweenMax, TimelineLite,Elastic, TimelineMax,Expo,Power4,Bounce} from "gsap/all";
import Cruz1 from "../Svg/Pendiente/Cruz1.svg";
import Cruz2 from "../Svg/Pendiente/Cruz2.svg";
import Cruz3 from "../Svg/Pendiente/Cruz3.svg";
import Cruz4 from "../Svg/Pendiente/Cruz4.svg";
import Carpeta from "../Svg/Pendiente/Carpeta.svg";
import Linea from "../Svg/Pendiente/Linea.svg";
// import Estrella1 from "..Svg/Pendiente/Estrella1.svg";
class Pendiente extends Component {
	constructor(props) {
		super(props);
		this.Cruz1=null;
		this.Cruz2=null;
		this.Cruz3=null;
		this.Cruz4=null;
        this.Carpeta=null;
        this.Estrella1=null;
        this.Carpeta=null;
		this.TimelineLite = null;
		this.TimelineMax=null;
		this.TweenMax=null;
		this.Planta = null;
		
	}
	componentDidMount() {
	TweenMax.from(this.Cruz3, 1, {delay: 0.6, ease: Expo.easeInOut});
        TweenMax.from(this.Cruz3, 1, {scale: .6,
  borderRadius: '50%',
  rotation: 360,
  repeat: -1,
  repeatDelay: .5,
  yoyo: true});
    // this.TimelineMax = new TimelineMax()
    //             .from(this.Cruz1, 1.4,{y:-100, ease:Elastic.easeOut.config(1.1, 0.4)})
	// 			.from(this.Cruz2, 1.1,{ ease:Power4.easeOut, opacity:0, y:20,ease:Expo.easeInOut})
	// 			.from(this.Cruz4, 1.2, { ease:Power4.easeOut, scaleY: 0, transformOrigin: '50% 100%' })
	// 			.from(this.Carpeta, 1.3, { ease:Power4.easeOut, scaleY: 0, transformOrigin: '50% 100%' })
		

	}
	render() {
		return (
			<div className="Pendiente">
				{/* <img src={Cruz1} ref={img => this.Cruz1 = img} className="Pendiente_Cruz1" alt="Cruz1"/>
				<img src={Cruz2} ref={img => this.Cruz2 = img} className="Pendiente_Cruz2"alt="Cruz2"/> */}
				<img src={Cruz3} ref={img => this.Cruz3 = img} className="Pendiente_Cruz3"alt="Cruz3" />
				{/* <img src={Cruz4} ref={img => this.Cruz4 = img} className="Pendiente_Cruz4" alt="Cruz4"/>
				<img src={Carpeta} ref={img => this.Carpeta = img} className="Pendiente_Carpeta" alt="Carpeta"/> */}
				<img src={Linea} className="Pendiente_Linea" alt="Linea"/>
				{/* <img src={Estrella1} ref={img => this.Estrella1 = img} className="Pendiente_Estrella1" alt=""/> */}
			</div>
	
		)
	}
}
export default Pendiente;