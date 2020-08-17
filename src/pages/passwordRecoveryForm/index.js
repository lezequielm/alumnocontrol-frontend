import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



const PasswordRecoveryForm = (props) => {

    const [passwordRecoveryFormInfo, setPasswordRecoveryFormInfo] = useState({
        password: null,
        confPassword: null,
    });
    const [passwordRecoveryFormResult, setPasswordRecoveryFormResult] = useState(undefined);

    const [validPassword, setValidPassword] = useState(undefined);


    const passwordRecoveryFormInfoChangeHandler = (e) => {
        setPasswordRecoveryFormInfo({
            ...passwordRecoveryFormInfo,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        console.log("passwordRecoveryForm", passwordRecoveryFormInfo);
        if (passwordRecoveryFormInfo.confPassword !== null && passwordRecoveryFormInfo.password !== null)
            setValidPassword(passwordRecoveryFormInfo.confPassword === passwordRecoveryFormInfo.password && passwordRecoveryFormInfo.password.length===8);


    }, [passwordRecoveryFormInfo]);


    const passwordRecoveryFormHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    isValid={validPassword}
                    isInvalid={validPassword !== undefined && !validPassword}
                    name="password"
                    type="password"
                    placeholder="Ingrese su Contraseña"
                    required
                    onChange={passwordRecoveryFormInfoChangeHandler}
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
                    onChange={passwordRecoveryFormInfoChangeHandler}
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                onClick={passwordRecoveryFormHandler}
            >
                Cambiar mi contraseña
            </Button>

        </>
    )
}

export default PasswordRecoveryForm;