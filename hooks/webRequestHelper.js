import { API_URL } from '@env';
import { Linking } from 'react-native';
import * as auth from './authentication';
import * as FileSystem from 'expo-file-system';

// const getUrl = (url) => {
//     return `${API_URL}${url}`;
// }


const fetchUnprotected = async (url, method, body, errorDisplay, next, log = false) => {

    const options = {
        method: method,
        headers: { 'Content-Type': 'application/json' }
    };

    if (body !== null)
        options.body = JSON.stringify(body)

    // console.log(url, " options: ", options)

    const response = await fetch(`${API_URL}${url}`, options)
        .then(response => response.json())
        .catch(err => errorDisplay(err.message));

    // console.log(url, " response : ", response)

    if (!response)
        return errorDisplay("Could not Connect to Server");

    if (response.status == "success")
        next(response)
    else
        errorDisplay(response.message)
}

const fetchProtected = async (url, method, body, errorDisplay, next, navigation, isRecursiveCall = false) => {
    const token = await auth.getToken();
    if (!token)
        getNewToken(navigation);

    // if(isRecursiveCall)
    //     console.log("new Token : ", token)

    const options = {
        method: method,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    };

    if (body !== null)
            options.body = JSON.stringify(body)

    const response = await fetch(`${API_URL}${url}`, options)
        .then(response => response.json())
        .catch(err => errorDisplay(err.message));

    if (!response)
        return errorDisplay("Could not Connect to Server");

    if (response.status == "success") {
        next(response)
    }
    else {
        if (response.token_expired && !isRecursiveCall) {
            // console.log("old Token : ", token)
            await getNewToken(navigation);
            return await fetchProtected(url, method, body, errorDisplay, next, navigation, true, contentType);
        }
        else
            return errorDisplay(response.message)
    }
}

const getNewToken = async (navigation) => {
    const { email, password } = await auth.getCredentials();

    // console.log("getting new token ", email, password)

    await fetchUnprotected('/consumer/login', 'POST', { email, password },
        () => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'SignIn' }],
            });
        },
        async (response) => { await auth.saveToken(response.token) });
}

const uploadFile = async (url, file, errorDisplay, next, navigation, contentType, isRecursiveCall = false) => {
    const token = await auth.getToken();
    if (!token)
        getNewToken(navigation);

    const options = {
        httpMethod: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': contentType
        },
        fieldName: 'file',
        uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
        sessionType: FileSystem.FileSystemSessionType.FOREGROUND
    };

    const response = await FileSystem.uploadAsync(`${API_URL}${url}`, file, options)

    if (!response)
        return errorDisplay("Could not Connect to Server");

    if (response.status == "success") {
        next(response)
    }
    else {
        if (response.token_expired && !isRecursiveCall) {
            // console.log("old Token : ", token)
            await getNewToken(navigation);
            return await fetchProtected(url, method, body, errorDisplay, next, navigation, true, contentType);
        }
        else
            return errorDisplay(response.message)
    }
}

const linkToPage = (url) => {
    Linking.openURL(`${API_URL}${url}`);
}

const checkConsumerStatusAndNavigate = (navigation) => {
    fetchProtected('/consumer/info', 'GET', null, async (err) => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }],
        });
    }, async (response) => {
        if (!response.consumer.isEmailConfrimed) {
            await fetchProtected('/consumer/send/confirmation/email', 'GET', null, () => { },
                () => { props.navigation.navigate('EmailConfirmation', { redirectToSignIn: true }) }, navigation)
        } else if (!response.consumer.isAccountComplete) {
            if (response.consumer.isTypeUser) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'NameDOB' }], // user set up
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'GetStarted' }], // company set up
                });
            }
        } else {
            if (response.consumer.isTypeUser) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Logs' }], // user main
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Logs' }], // company main
                });
            }
        }
    }, navigation)
}

const fetchCustomToken = async (url, method, token, body, errorDisplay, next) => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };

    if (body !== null)
        options.body = JSON.stringify(body)

    const response = await fetch(`${API_URL}${url}`, options)
        .then(response => response.json())
        .catch(err => errorDisplay(err.message));

    if (response.status == "success")
        next(response)
    else
        errorDisplay(response.message)

    return response;
}

module.exports = { fetchProtected, fetchUnprotected, linkToPage, checkConsumerStatusAndNavigate, fetchCustomToken, uploadFile };