import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const PasswordRecovery = (props) => {
    const [passwordRecoveryInfo, setPasswordRecoveryInfo] = useState({
        email: null,
    });

    const [passwordRecoveryResult, setPasswordRecoveryResult] = useState(undefined);

    const passwordRecoveryInfoChangeHandler = (e) => {
        setPasswordRecoveryInfo({
            ...passwordRecoveryInfo,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    }


    const passwordRecoveryHandler = (e) => {

    }
    return (
        <>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Ingrese su Correo Electrónico"
                    required
                    onChange={passwordRecoveryInfoChangeHandler}
                />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                onClick={passwordRecoveryHandler}
            >
                Recuperar mi contraseña
            </Button>

        </>
    )
}
export default PasswordRecovery;