const apiai = require('apiai'),
    functions = require('firebase-functions'),
    firebaseAdmin = require('firebase-admin');

const app = apiai('f8a6229347a64e3eac38a17f5972dffe'),
    admin = firebaseAdmin.initializeApp(functions.config().firebase);

module.exports = functions.https.onRequest((req, res) => {
    let request = app.textRequest('Hello', {
        sessionId: 123456
    });

    request.on('response', response => {
        admin
            .database()
            .ref('/messages')
            .set({
                response1: response.result.fulfillment.speech
            })
            .then(snapshot => {
                console.log(snapshot);
                res.send(200, {
                    success: true
                });
            })
            .catch(() => {
                res.send(500, {
                    success: false
                })
            })
    });

    request.on('error', error => {
        res.send(200, error);
    });

    request.end();
});