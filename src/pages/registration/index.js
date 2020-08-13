import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import FormAlert from "../../components/formAlert";
import Button from "react-bootstrap/Button";
import {login} from "../../services/auth/authService";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, {useState, useEffect} from "react";

const registration = (props) => {

    const [registrationInfo, setRegistrationInfo] = useState({
        firstName: null,
        SecondName: null,
        emailAddress: null,
        confEmailAddress: null,
        password: null,
        confPassword: null,
    });
    const [registrationResult, setRegistrationResult] = useState(undefined);



    const registrationInfoChangeHandler = (e) => {
        setRegistrationInfo({
            ...registrationInfo,
            //[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    }

    const loginHandler = (e) => {
        e.preventDefault();
    }

return (
    <>

            <Form>
                <Row>
                    <Col>
                        <Form.Control
                            name="firstName"
                            placeholder="Nombre"
                            type="text"
                            required
                            onChange={registrationInfoChangeHandler}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            name="lastName"
                            placeholder="Apellido"
                            type="text"
                            required
                            onChange={registrationInfoChangeHandler}
                        />
                    </Col>
                </Row>
            </Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                    name="emailAddress"
                    type="text"
                    placeholder="Correo Electrónico"
                    required
                    onChange={registrationInfoChangeHandler}
                />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                    name="confEmailAddress"
                    type="text"
                    placeholder="Confirme Correo Electrónico"
                    required
                    onChange={registrationInfoChangeHandler}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Ingrese la Contraseña"
                    required
                    onChange={registrationInfoChangeHandler}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    name="confPassword"
                    type="password"
                    placeholder="Confirme Contraseña"
                    required
                    onChange={registrationInfoChangeHandler}
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                onClick={loginHandler}
            >
                Registrarme
            </Button>

    </>
)
}

export default registration();