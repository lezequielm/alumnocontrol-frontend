import React, {useState, useEffect} from "react";
import {useHistory} from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {register} from "../../services/auth/authService";


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
    const [validEmail, setValidEmail] = useState(undefined);
    const [validLogin, setValidLogin] = useState(undefined);
    const [validFirstName, setValidFirstName] = useState(undefined);
    const [validLastName, setValidLastName] = useState(undefined);
    const history = useHistory();

    const registrationInfoChangeHandler = (e) => {
        setRegistrationInfo({
            ...registrationInfo,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        console.log("registrationInfo", registrationInfo);
        if (registrationInfo.confPassword !== null && registrationInfo.password !== null)
            setValidPassword(registrationInfo.confPassword === registrationInfo.password && registrationInfo.password.length===8);

        if (registrationInfo.confEmail !== null && registrationInfo.email !== null)
            setValidEmail(registrationInfo.confEmail === registrationInfo.email);

        if (registrationInfo.login !== null)
            setValidLogin(registrationInfo.login.length>=3 && registrationInfo.login.length<=50 && !registrationInfo.login.includes(' '));

        if (registrationInfo.firstName !== null)
            setValidFirstName(registrationInfo.firstName.length<=50);

        if (registrationInfo.lastName !== null)
            setValidLastName(registrationInfo.lastName.length<=50);

    }, [registrationInfo]);


    const registrationHandler = (e) => {
        e.preventDefault();
        register(registrationInfo)
            .then((data) => {
                setRegistrationResult(true);
            })
            .catch(() => setRegistrationResult(false));
    }

    useEffect(() => {
        if (registrationResult)
            history.push('/login');

    },[registrationResult]);

    return (
        <>
            <Form.Group controlId="formBasicUsserName">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                    isValid={validLogin}
                    isInvalid={validLogin !== undefined && !validLogin}
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
                            isValid={validFirstName}
                            isInvalid={validFirstName !== undefined && !validFirstName}
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
                            isValid={validLastName}
                            isInvalid={validLastName !== undefined && !validLastName}
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
                    isValid={validEmail}
                    isInvalid={validEmail !== undefined && !validEmail}
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
                    isValid={validEmail}
                    isInvalid={validEmail !== undefined && !validEmail}
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
                    isValid={validPassword}
                    isInvalid={validPassword !== undefined && !validPassword}
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
                    isValid={validPassword}
                    isInvalid={validPassword !== undefined && !validPassword}
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
                onClick={registrationHandler}
            >
                Registrarme
            </Button>

        </>
    )
}

export default Registration;