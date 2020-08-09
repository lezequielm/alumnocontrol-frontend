import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import FormAlert from '../../components/formAlert';

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
    }, [loginInfo])

    const loginHandler = (e) => {
        e.preventDefault();
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(loginInfo);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };


        fetch("http://lezequielm.ddns.net:8080/api/authenticate", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch( () => setLoginResult(false));
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