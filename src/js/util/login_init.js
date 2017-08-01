import firebase from 'JSRoot/util/firebase_init.js';

const initLogin = () => {
    let loginButton = document.querySelector('#login_konnect');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            firebase
                .auth()
                .signInWithEmailAndPassword('krapeshnaik@gmail.comm', 'krapesh')
                .then(user => {
                    console.log(user);
                })
                .catch(error => {
                    console.log(error);
                });
        })
    }
}

export default {
    init: initLogin
}