const
    apiai = require('apiai'),
    functions = require('firebase-functions'),
    firebaseAdmin = require('firebase-admin');

const
    config = require('./config'),
    app = apiai(config.apiai.key),
    admin = firebaseAdmin.initializeApp(functions.config().firebase);

module.exports = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', config.accessControl.allowOrigin);
    res.set('Access-Control-Allow-Methods', config.accessControl.allowMethods);

    let request = app.textRequest(req.query.command, {
        sessionId: config.apiai.sessionId
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