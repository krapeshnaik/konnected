const
    apiai = require('apiai'),
    functions = require('firebase-functions'),
    firebaseAdmin = require('firebase-admin');

const
    app = apiai('f8a6229347a64e3eac38a17f5972dffe'),
    admin = firebaseAdmin.initializeApp(functions.config().firebase);

module.exports = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://konnected-e015d.firebaseapp.com');
    res.set('Access-Control-Allow-Methods', 'GET');

    let request = app.textRequest(req.query.command, {
        sessionId: 123456
    });

    request.on('response', response => {
        if (JSON.stringify(response.result.parametersa) == '{}') {
            // non command replies
            res
                .status(200)
                .json({
                    text: response.result.fulfillment.speech
                });
        } else {
            // command replies
            admin
                .database()
                .ref('/devices1')
                .set({
                    d1: false,
                    d2: true,
                    d3: false,
                    d4: true
                })
                .then(snapshot => {
                    res
                        .status(200)
                        .json({
                            text: response.result.fulfillment.speech
                        });
                })
                .catch(() => {
                    res
                        .status(500)
                        .json({
                            success: false
                        })
                });
        }
    });

    request.on('error', error => {
        res.send(200, error);
    });

    request.end();
});