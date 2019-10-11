		import React, { Component } from 'react';
		import "./Scss/Index.scss";
import Elaboracion from './Animation/Elaboracion';
import Pendiente from './Animation/Pendiente';
import Preloader from './Animation/Preloader';
import Bandeja from './Animation/Bandeja';
import DrawSvg from './Animation/DrawSvg';
class App extends Component {
  render() { 
    return ( 
      <div>
{/* 
 	<Elaboracion/>
     <Pendiente/>  */}
			{/* <Preloader/> */}
			{/* <Bandeja/> */}
		<DrawSvg/>
	  </div>
     );
  }
}
 
export default App;