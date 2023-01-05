import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";


export async function register(email, username, password) {
    const { sessionToken, objectId } = await post('/users', { email, username, password });

    const userData = {
        objectId,
        email,
        username,
        sessionToken
    }
    setUserData(userData);
    return userData;
}

export async function login(username, password) {
    const { objectId, email, sessionToken } = await post('/login', { username, password });

    const userData = {
        objectId,
        email,
        username,
        sessionToken
    }
    setUserData(userData);
    return userData;
}

export function logout() {
    const result = get('/users/me');

    clearUserData();
    return result;
}