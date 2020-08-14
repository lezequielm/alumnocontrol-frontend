import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Registration = (props) => {

    const [registrationInfo, setRegistrationInfo] = useState({
        login: null,
        firstName: null,
        lastName: null,
        email: null,
        confEmail: null,
        password: null,
        confPassword: null,
    });
    const [registrationResult, setRegistrationResult] = useState(undefined);

    const [validPassword, setValidPassword] = useState(undefined);


    const registrationInfoChangeHandler = (e) => {
        setRegistrationInfo({
            ...registrationInfo,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        console.log("registrationInfo", registrationInfo);
        if (registrationInfo.confPassword !== null) {
            if (registrationInfo.confPassword === registrationInfo.password)
                console.log("Las contraseñas coinciden");
            else
                console.warn("las contraseñas no coinciden");
        }

    }, [registrationInfo]);


    const loginHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Form.Group controlId="formBasicUsserName">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                    name="login"
                    type="text"
                    placeholder="Ingrese nombre de usuario"
                    required
                    onChange={registrationInfoChangeHandler}
                />
                <Form.Text className="text-muted">
                    El nombre de usuario no puede contener espacios.
                </Form.Text>
            </Form.Group>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            name="firstName"
                            placeholder="Ingrese Nombre"
                            type="text"
                            required
                            onChange={registrationInfoChangeHandler}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            name="lastName"
                            placeholder="Ingrese Apellido"
                            type="text"
                            required
                            onChange={registrationInfoChangeHandler}
                        />
                    </Col>
                </Row>
            </Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Ingrese su Correo Electrónico"
                    required
                    onChange={registrationInfoChangeHandler}
                />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Confirmación de Email</Form.Label>
                <Form.Control
                    name="confEmail"
                    type="text"
                    placeholder="Ingrese nuevamente su Correo Electrónico"
                    required
                    onChange={registrationInfoChangeHandler}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Ingrese su Contraseña"
                    required
                    onChange={registrationInfoChangeHandler}
                />
                <Form.Text className="text-muted">
                    La contraseña debe contener 8 caracteres, puede combinar letras y números.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirmación de Contraseña</Form.Label>
                <Form.Control
                    name="confPassword"
                    type="password"
                    placeholder="Ingrese nuevamente su Contraseña"
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

export default Registration;