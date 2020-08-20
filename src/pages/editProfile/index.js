import React from 'react';
import Form from 'react-bootstrap/Form';
import {InputMoment, BigInputMoment, DatePicker, TimePicker, DatePickerRange} from 'react-input-moment';


//foto
//direcciones
    //calle, numero, departamento, piso
//contacto del usuario
//DNI
//Fecha de nacimiento
//Instituto
//Grupo



const EditProfile = (props) => {
    return (
        <>
            <Form>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Seleccione una imagen de perfil"/>
                </Form.Group>

                <Form.Group controlId="instituteSelect">
                    <Form.Label>Seleccione intitucion</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="groupSelect">
                    <Form.Label>Seleccione Grupo</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="text">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                        name="dni"
                        type="text"
                        placeholder="Ingrese su DNI sin espacios y sin puntos"
                        required
                    />
                </Form.Group>



                <div className="wrapper">
                    <DatePicker

                        locale="en"
                    />
                </div>




            <Form.Group controlId="text">
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                    name="username"
                    type="text"
                    placeholder="Ingrese el Usuario"
                    required
                />
                <Form.Control
                    name="username"
                    type="text"
                    placeholder="Ingrese el Usuario"
                    required
                />
            </Form.Group>


             </Form>
        </>
    )
}
export default EditProfile;