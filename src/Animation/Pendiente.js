import React, { Component } from "react";
import { TweenMax,Expo} from "gsap/all";
import Cruz1 from "../Svg/Pendiente/Cruz1.svg";
import Cruz2 from "../Svg/Pendiente/Cruz2.svg";
import Cruz3 from "../Svg/Pendiente/Cruz3.svg";
import Cruz4 from "../Svg/Pendiente/Cruz4.svg";
import Carpeta from "../Svg/Pendiente/Carpeta.svg";
import Linea from "../Svg/Pendiente/Linea.svg";
import Estrella1 from "../Svg/Pendiente/Estrella1.svg";
import Estrella2 from "../Svg/Pendiente/Estrella2.svg";
import Estrella3 from "../Svg/Pendiente/Estrella3.svg"
class Pendiente extends Component {
	constructor(props) {
		super(props);
		this.Linea=null;
		this.Cruz1=null;
		this.Cruz2=null;
		this.Estrella1=null;
		this.Cruz3=null;
		this.Carpeta=null;
		this.Cruz4=null;
		this.TweenMax=null;
		this.Estrella2=null;
		this.Estrella3=null;	
	}	
	
	componentDidMount() {
        TweenMax.from(this.Cruz1, 5, {scale: .4, rotation: 360, repeat: -1, repeatDelay: .3,yoyo: true});
		TweenMax.from(this.Cruz2, 6, {scale: .4, rotation: 360, repeat: -1, repeatDelay: .5,yoyo: true});
		TweenMax.from(this.Cruz3, 4, {rotation: 360, repeat: -1, repeatDelay: .6,yoyo: true});
		TweenMax.from(this.Estrella1, 2, {scale: 1.5,rotation: 360, repeat: -1,yoyo: true});
		TweenMax.from(this.Estrella2, 3, {rotation: 360, repeat: -1,yoyo: true});
		TweenMax.from(this.Estrella3, 1, {scale: .4, repeat: -1,yoyo: true});
		TweenMax.from(this.Carpeta, 2, {delay: .2, scale: 0,ease: Expo.easeInOut});
		TweenMax.to(this.Carpeta, 2, { delay: .2,scale: 1,ease: Expo.easeInOut});
		TweenMax.from(this.Cruz4, .5, {scale: .4, repeat: -1,yoyo: true});
	}
	render() {
		return (
			<div className="Pendiente">
				<img src={Linea} className="Pendiente_Linea" alt="Linea"/>
				<img src={Cruz1} ref={img => this.Cruz1 = img} className="Pendiente_Cruz1" alt="Cruz1" />
				<img src={Cruz2} ref={img => this.Cruz2 = img}  className="Pendiente_Cruz2" alt="Cruz2" />
				<img src={Estrella1}  ref={img => this.Estrella1 = img} className="Pendiente_Estrella1" alt="Estrella1" />
				<img src={Cruz3} ref={img => this.Cruz3 = img} className="Pendiente_Cruz3" alt="Cruz3" />
				<img src={Carpeta} ref={img => this.Carpeta = img} className="Pendiente_Carpeta" alt="Carpeta" />
				<img src={Cruz4} ref={img => this.Cruz4 = img} className="Pendiente_Cruz4" alt="Cruz4" />
				<img src={Estrella2} ref={img => this.Estrella2 = img} className="Pendiente_Estrella2" alt="Estrella2" />
				<img src={Estrella3}  ref={img => this.Estrella3 = img} className="Pendiente_Estrella3" alt="Estrella3" />
			</div>
	
		)
	}
}
export default Pendiente;