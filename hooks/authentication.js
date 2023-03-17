import * as SecureStore from 'expo-secure-store';

const saveToken = async (token) => {
    // kind of a hack to be able to store multiple values inside keychain, but they are secure so it's worth it.
    // console.log("trying to save token ", token)

    await SecureStore.setItemAsync(
        'access-token',
        token
    );
};

const getToken = async () => {  
    const res = await SecureStore.getItemAsync('access-token');
    return res;
}

const deleteToken = async () => {
    await SecureStore.deleteItemAsync('access-token');
}

const saveCredentials = async (email, password) => {
    // kind of a hack to be able to store multiple values inside keychain, but they are secure so it's worth it.
    await SecureStore.setItemAsync(
        'credentials', JSON.stringify({
            email,
            password
        })
    );
};

const getCredentials = async () => {
    const res = await SecureStore.getItemAsync('credentials');
    return JSON.parse(res);
}

const deleteCredentials = async () => {
    await SecureStore.deleteItemAsync('credentials');
}

module.exports = {saveCredentials, getToken, saveToken, getCredentials, deleteCredentials, deleteToken};