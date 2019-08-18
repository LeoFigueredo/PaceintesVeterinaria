import React , {Component} from 'react';
import './bootstrap.min.css'; 
import Header from './components/Header';

class App extends Component {
  state = {}
  render() {
    return ( 
      <div className="Container">
          <Header
            titulo='Administrador de pacientes de la Veterinaria'
          />
      </div>
    );
  }

}

export default App;
