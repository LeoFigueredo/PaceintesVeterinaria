import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';


const stateInicial = {
    cita : {
        mascota : '', 
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''
    }, 
    error: false 

}
class NuevaCita extends Component {
state = {...stateInicial}    
handleChange = e => {

    this.setState({
        cita : {
            ...this.state.cita,
            [e.target.name] : e.target.value
        }
    })
}
//cuando el usuario envial el form
handleSubmit = e => {
    e.preventDefault();

    //extraer los valores del state
    const { mascota, propietario, fecha, hora, sintomas} = this.state.cita; 

    //validar que todos los campos esten llenos
    if( mascota === '' || propietario=== '' || fecha === '' || hora === '' || sintomas === '')
    {
        this.setState({
            error: true
        });
        return; 
    }

    //generar objeto con los datos 
    const nuevaCita = {...this.state.cita};
    nuevaCita.id = uuid();

    //agregar al state de citas 
    this.props.crearNuevaCita(nuevaCita);

    //colocar en el state el stateInicial
    this.setState({
        ...stateInicial
    })

}

    render() {

    //Extraer valor del state   
    const {error} = this.state;       
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className = "card-title text-center mb-5">
                        Crear una nueva cita
                    </h2>
                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios.</div> : null }
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className= "col-sm-4 col-lg-2 col-form-label">
                                    Nombre de la mascota: 
                                </label>
                                <div className="col-sm-8 col-lg-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre Mascota"
                                        name="mascota"
                                        onChange={this.handleChange}
                                        value = { this.state.cita.mascota}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className= "col-sm-4 col-lg-2 col-form-label">
                                    Nombre del dueño: 
                                </label>
                                <div className="col-sm-8 col-lg-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre Dueño Mascota"
                                        name="propietario"
                                        onChange={this.handleChange}
                                        value = { this.state.cita.propietario}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className= "col-sm-4 col-lg-2 col-form-label">
                                    Fecha: 
                                </label>
                                <div className="col-sm-8 col-lg-4">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fecha"
                                        onChange={this.handleChange}
                                        value = { this.state.cita.fecha}
                                    />
                                </div>
                                <label className= "col-sm-4 col-lg-2 col-form-label">
                                    Hora: 
                                </label>
                                <div className="col-sm-8 col-lg-4">
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="hora"
                                        onChange={this.handleChange}
                                        value = { this.state.cita.hora}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className= "col-sm-4 col-lg-2 col-form-label">
                                    Sintomas: 
                                </label>
                                <div className="col-sm-8 col-lg-10">
                                   <textarea 
                                   name="sintomas" 
                                   className="form-control"
                                   placeholder="Describe los sintomas"
                                   onChange={this.handleChange}
                                   value = { this.state.cita.sintomas}
                                
                                    ></textarea>
                                </div>
                            </div>
                            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita"/>
                        </form>
                </div>
                
            </div>
        );
    }
}

NuevaCita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
}

export default NuevaCita;
