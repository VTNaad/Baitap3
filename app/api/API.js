import AxiosClient from "./Axios";

const postRequest = async (url, data, headers) => {
    // try {
        // const response = await AxiosClient.post(url, data, headers);
        // return response.data;
    // } catch (error) {
        // if (error.response) {
            // return error.response.data; 
        // } else {
            // throw error;
        // }
    // }
    //const response = await AxiosClient.post(url, data, headers);
    return AxiosClient.post(url, data, headers);
};

export const login = async (email, password) => {
    const data = { email, password };
    return postRequest("login", data);
};

export const register = async (name, email, password) => {
    const data = { name, email, password };
    return postRequest("register", data);
};

export const forgotPassword = async (email) => {
    const data = { email };
    // return postRequest("forgotPassword", data, {
        // headers: {
            // "Content-Type": "multipart/form-data",
        // },
    // });
    return postRequest("forgotPassword", data);
};

export const validateOtp = async (email, otp) => {
    const data = { email, otp };
    // return postRequest("validateOtp", data, {
        // headers: {
            // "Content-Type": "multipart/form-data",
        // },
    // });
    return postRequest("validateOtp", data);
};

export const resetPassword = async (email, newPassword) => {
    const data = { email, newPassword };
    // return postRequest("resetPassword", data, {
        // headers: {
            // "Content-Type": "multipart/form-data",
        // },
    // });
    return postRequest("resetPassword", data);
};
