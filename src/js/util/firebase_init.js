import debug from 'debug';
import firebase from 'firebase';
import Konnected from 'JSRoot/app_scope.js';

var logger = debug('konnected:firebase');

const firebaseInit = () => {
    logger('initialize');

    var config = {
        apiKey: FireBaseKey,
        authDomain: FireBaseAuthDomain,
        databaseURL: FireBaseDatabase,
        storageBucket: FireBaseStorage,
        messagingSenderId: FCMSenderId,
    };

    Konnected.firebase = firebase.initializeApp(config);
}

export default {
    init: firebaseInit
}