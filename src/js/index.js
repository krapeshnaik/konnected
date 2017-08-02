'use strict';

import debug from 'debug';

import router from '@root/router';
import firebase from '@util/firebase_init.js';
import login from '@util/login_init.js';

debug('konnected:boot')('initialize');

firebase.init();
login.init()
router.init();