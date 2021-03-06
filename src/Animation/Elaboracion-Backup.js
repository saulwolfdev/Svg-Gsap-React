import React, { Component } from "react";
import { TweenMax,Elastic, TimelineMax,Expo,Power4,Bounce} from "gsap/all";
import Sol from "../Svg/Elaboracion/Sol.svg";
import Captus1 from "../Svg/Elaboracion/Captus1.svg";
import Bandeja from "../Svg/Elaboracion/Bandeja.svg";
import Captus2 from "../Svg/Elaboracion/Captus2.svg";
import Captus3 from "../Svg/Elaboracion/Captus3.svg";
import Linea from "../Svg/Elaboracion/Linea.svg";
import Planta from "../Svg/Elaboracion/Planta.svg";
import Fondo from "../Svg/Elaboracion/Fondo.svg";

// 	const svgElaboracion=[
// 	{
// 		src:"../Svg/Elaboracion/Fondo.svg",
// 		alt:"Sol",
// 		className:"Elaboracion_Sol"
// 	}
// ]
class Elaboracion extends Component {
	constructor(props) {
		super(props);
		this.Sol=null;
		this.Captus1=null;
		this.Bandeja=null;
		this.Captus2=null;
		this.Captus3=null;
		this.Fondo=null;
		this.TimelineMax=null;
		this.TweenMax=null;
		this.Planta = null;
		// this.svgElaboracion = [];
	}
	componentDidMount() {
	TweenMax.from(this.Bandeja, 1, {delay: 0.6, ease: Expo.easeInOut});

	this.TimelineMax = new TimelineMax()
				.from(this.Captus1, 1.1,{ ease:Power4.easeOut, opacity:0, y:20, ease:Expo.easeInOut})
				.from(this.Captus2, 1.2, { ease:Power4.easeOut, scaleY: 0, transformOrigin: '50% 100%' })
				.from(this.Captus3, 1.3, { ease:Power4.easeOut, scaleY: 0, transformOrigin: '50% 100%' })
				.from(this.Sol, 1.4,{y:-100, ease:Elastic.easeOut.config(1.1, 0.4)})
				.to(this.Planta,25,{repeat:-1,repeatDelay:5,left:"90%",rotation: 360,ease:Bounce.easeOut,transformOrigin:"50% 50%"});
				
	}
	render() {
		return (
			<div className="Elaboracion">
				<img src={Sol} ref={img => this.Sol = img} className="Elaboracion_Sol" alt="Sol"/>
				<img src={Captus1} ref={img => this.Captus1 = img} className="Elaboracion_Captus1"alt="Captus1"/>
				<img src={Bandeja} ref={img => this.Bandeja = img} className="Elaboracion_Bandeja"alt="Bandeja" />
				<img src={Captus2} ref={img => this.Captus2 = img} className="Elaboracion_Captus2" alt="Captus2"/>
				<img src={Captus3} ref={img => this.Captus3 = img} className="Elaboracion_Captus3" alt="Captus3"/>
				<img src={Linea} className="Elaboracion_Linea" alt="Linea"/>
				<img src={Planta} ref={img => this.Planta = img} className="Elaboracion_Planta" alt=""/>
				<img src={Fondo} className="Elaboracion_Fondo" alt="Fondo"/>
				{/* <div>
				{ svgElaboracion.map( (svg, i) => {
				const { src, alt, className} = svg;
				return <img key={`svg-${i}`} src={src} alt={alt} className={className} ref={ svg => this.svgElaboracion[i] = svg }/>;
			})}
				</div> */}
			</div>
	
		)
	}
}
export default Elaboracion;