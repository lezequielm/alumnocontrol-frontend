import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormAlert from '../../components/formAlert';
import {login} from "../../services/auth/authService";

const Login = (props) => {
    const [loginInfo, setLoginInfo] = useState({
        username: null,
        password: null,
        rememberMe: false,
    });
    const [loginResult, setLoginResult] = useState(undefined);

    const loginInfoChangeHandler = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    }

    useEffect(() => {
        console.log("loginInfo", loginInfo);
    }, [loginInfo]);

    useEffect(() => {
        console.log("loginResult", loginResult);
        if (loginResult)
            window.location.reload();
    }, [loginResult]);

    const loginHandler = (e) => {
        e.preventDefault();
        login(loginInfo)
            .then((data) => {
                sessionStorage.setItem('sessionToken',data.id_token);
                setLoginResult(true);
            })
            .catch(() => {
                sessionStorage.removeItem('sessionToken');
                setLoginResult(false);
            });
    }

    return (
        <>
            <Form>
                <FormAlert
                    title={'Usuario o contraseña invalidos.'}
                    message={'Verifique los datos e intente nuevamente.'}
                    visible={loginResult !== undefined && !loginResult}
                />
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
                <Button
                    variant="primary"
                    type="submit"
                    onClick={loginHandler}
                >
                    Ingresar
                </Button>
            </Form>
        </>
    )
}
export default Login;