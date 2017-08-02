'use strict';
require('@css/chat.scss');

import debug from 'debug';
import Konnected from '@root/app_scope.js';

let logger = debug('konnected:chat_component');

export default data => {
    return {
        html: `<div class="chat-container animated flipInX">
            <div class="messages"></div>
            <div class="msg-inp">
                <div class="ripple msg-cont dib va-t">
                    <input type="text" class="msg" id="msg_inp" />
                </div>
                <div class="ripple send dib va-t" id="send_msg"></div>
            </div>
        </div>`,
        bindEvents: bindEvents
    };
}

const appendMessage = message => {

};

const bindEvents = () => {
    document
        .querySelector('#send_msg')
        .addEventListener('click', e => {
            let message = document.querySelector('#msg_inp').value;

            // call function

        })
};