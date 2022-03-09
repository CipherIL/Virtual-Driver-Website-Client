import axios from 'axios';

const URL = "http://localhost:8080/user/";

interface ILoginData {
    email: string;
    password: string;
}

export const userLogin = async (loginData: ILoginData) => {
    try {
        const response = await axios.post(URL+"login", {
            email: loginData.email,
            password: loginData.password,
        })

    } catch (err) {
        
    }

}   