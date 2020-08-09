import React from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const formAlert = (props) => {

    if (props.visible){
        return (
            <>
                <Form.Group controlId="formAlert">
                    <Alert
                        variant="danger"
                        dismissible>
                        <Alert.Heading>{props.title}</Alert.Heading>
                        <p>
                            {props.message}
                        </p>
                    </Alert>
                </Form.Group>
            </>
        )
    } else return (<></>);
}

export default formAlert;