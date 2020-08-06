import React, {Suspense} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "../../components/spinner";
import {renderRoutes} from "react-router-config";


const loginLayout = (props) => {

    return(
        <Container fluid>
            <Row>
                <h1>ALUMNO CONTROL</h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={8}>
                    <Suspense fallback={(<Spinner/>)}>
                        {renderRoutes(props.route.routes)}
                    </Suspense>
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}
export default loginLayout;