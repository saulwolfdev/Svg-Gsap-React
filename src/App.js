import React, { Component } from 'react';
import "./Scss/Index.scss";
import Elaboracion from './Animation/Elaboracion';
import Pendiente from './Animation/Pendiente';
class App extends Component {
  render() { 
    return ( 
      <div>

		<Elaboracion/>
    <Pendiente/>
	  </div>
     );
  }
}
 
export default App;