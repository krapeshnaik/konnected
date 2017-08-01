import debug from 'debug';
import router from './router';
import firebase from 'JSRoot/util/firebase_init.js';
import login from 'JSRoot/util/login_init.js';

debug('konnected:boot')('initialize');

firebase.init();
login.init()
router.init();