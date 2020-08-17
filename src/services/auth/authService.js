import {AUTHENTICATE_ENDPOINT, REGISTER_ENDPOINT} from "../../conf/apiConfiguration";

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

export const register = async (registrationInfo) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(registrationInfo);
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };
    let response = await fetch(REGISTER_ENDPOINT, requestOptions);
    if (response.status === 200){
        let data = await response.json();
        console.log(data);
        return data;
    }
    throw new Error(response.statusText);
}