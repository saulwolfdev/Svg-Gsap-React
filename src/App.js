import React, { Component } from 'react';
import "./Scss/Index.scss";
import Elaboracion from './Animation/Elaboracion';
import Pendiente from './Animation/Pendiente';
import Preloader from './Animation/Preloader';
class App extends Component {
  render() { 
    return ( 
      <div>
{/* 
	<Elaboracion/>
    <Pendiente/> */}
			<Preloader/>
	  </div>
     );
  }
}
 
export default App;