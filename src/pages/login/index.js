import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = (props) => {
    const [loginInfo, setLoginInfo] = useState({
        username: null,
        password: null,
        rememberMe: false,
    });



    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el Usuario"
                        required
                        onChange={(e) => {
                            setLoginInfo({...loginInfo, username: e.target.value});
                            console.log("setLoginInfo", loginInfo);
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese la Contraseña"
                        required
                        onChange={(e) => {
                            dispatchEvent(e.event);
                            setLoginInfo({...loginInfo, password: e.target.value});
                            console.log("setLoginInfo", loginInfo);
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Recuerdame"
                        onChange={(e) => {
                            setLoginInfo({...loginInfo, rememberMe: !e.target.checked});
                            console.log("setLoginInfo", loginInfo);
                        }}

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