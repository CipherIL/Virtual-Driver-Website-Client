import axios from 'axios';

const URL = "http://localhost:8080/user/";

interface ILoginData {
    email: string;
    password: string;
}

interface IRegisterData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export const userLogin = async (loginData: ILoginData) => {
    try {
        const response = await axios.post(URL+"login", {
            email: loginData.email,
            password: loginData.password,
        },{withCredentials: true})
        return response.data;
    } catch (err) {
        if(axios.isAxiosError(err)) {
            console.log(err.response)
            return err.response?.data;
        } else {
            console.log(err);
        }
    }
}

export const userLogout = async () => {
    try {
        await axios.get(URL+"logout",{withCredentials: true});
        return true;
    } catch (err) {
        if(axios.isAxiosError(err)) {
            console.log(err.response)
        } else {
            console.log(err);
        }
        return false;
    }
}

export const tokenRelogin = async () => {
    try {
        const response = await axios.get(URL+"token-relogin",{withCredentials: true});
        return response.data;
    } catch (err) {
        if(axios.isAxiosError(err)) {
            console.log(err.response)
        } else {
            console.log(err);
        }
    }
}

export const userRegister = async (registerData: IRegisterData) => {
    try {
        const response = await axios.post(URL+"register",{
            email: registerData.email,
            password: registerData.password,
            firstName: registerData.firstName,
            lastName: registerData.lastName,
        },{withCredentials: true});
        return response.data;
    } catch (err) {
        if(axios.isAxiosError(err)) {
            console.log(err.response)
            return err.response?.data;
        } else {
            console.log(err);
        }
    }
}