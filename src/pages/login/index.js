import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = (props) => {
    let usernameField;
    let passwordField;
    let rememberMeField;
    let [loginInfo, setLoginInfo] = useState({
        username: null,
        password: null,
        rememberMe: false,
    });

    const loginInfoChangeHandler = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.type === 'checkbox'? e.target.checked : e.target.value
        });
    }

    useEffect(()=> {
        console.log("loginInfo", loginInfo);
    },[loginInfo])

    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        name="username"
                        type="text"
                        placeholder="Ingrese el Usuario"
                        required
                        onChange={loginInfoChangeHandler}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Ingrese la Contraseña"
                        required
                        onChange={loginInfoChangeHandler}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        name="rememberMe"
                        type="checkbox"
                        label="Recuerdame"
                        onChange={loginInfoChangeHandler}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
            </Form>
        </>
    )
}
export default Login;