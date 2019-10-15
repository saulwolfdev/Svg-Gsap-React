import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';
// import './styles.css';

const SvgStyled = styled.div``;

class DrawSvg extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<SvgStyled>
				<Tween
					wrapper={<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" />}
					from={{ svgDraw: 0, }}
					to={{ svgDraw: 1, }}
					yoyo={true}
					duration={2}
					repeat={-1}
					x={"10%"}
					y={"30%"}
					width={"30%"}
					height={"30%"}
					>
					<rect x="10" y="10"  stroke="black" fill="transparent" strokeWidth="5" />
				</Tween>
			</SvgStyled>

		);
	}
}

export default DrawSvg;