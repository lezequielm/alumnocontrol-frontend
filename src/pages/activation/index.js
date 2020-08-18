import React, {useEffect, useState} from "react";
import InfoModal from "../../components/infoModal";
import {useHistory} from "react-router";
import {activate} from "../../services/auth/authService";


const Activation = (props) => {

    const [activationResult, setActivationResult] = useState(undefined)

    const history = useHistory();

    useEffect(() => {
        let activationKey = props.location.search.split('=')[1];
        activate(activationKey)
            .then(() => setActivationResult(true))
            .catch(() => setActivationResult(false));
    }, []);

    return (
        <>
            <div>
                Activando su cuenta de usuario...
            </div>
            <InfoModal
                show={activationResult}
                onClose={() => history.push('/login')}
                title={'Registro'}
                message={'Su cuenta ya se encuentra activada'}

            />

        </>
    );

}

export default Activation;