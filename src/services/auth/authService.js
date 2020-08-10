import {AUTHENTICATE_ENDPOINT} from "../../conf/apiConfiguration";

export const login = async (loginInfo) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(loginInfo);
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };
    let response = await fetch(AUTHENTICATE_ENDPOINT, requestOptions);
    if (response.status === 200){
        return await response.json();
    }
    throw new Error(response.statusText);
};

