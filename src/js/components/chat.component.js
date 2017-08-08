'use strict';
require('@css/chat.scss');
require('@css/spinner.scss');

import debug from 'debug';
import config from '@config';
import Konnected from '@root/app_scope.js';

let logger = debug('konnected:chat_component');

let HTMLCache = {};

export default messages => {
    return {
        html: `<div class="chat-container animated flipInX">
            <div class="messages-list">
                <ul class="messages"></ul>
            </div>
            <div class="msg-inp">
                <div class="ripple msg-cont dib va-t">
                    <input type="text" class="msg" id="msg_inp" maxlength="25"/>
                </div>
                <div class="ripple send dib va-t" id="send_msg">
                    <div class="spinner hide">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </div>
            </div>
        </div>`,
        bindEvents: bindEvents
    };
}

const appendMessage = (message, isBot = false) => {
    if (message) {
        var node = document.createElement('li');
        var textnode = document.createTextNode(message);
        node.appendChild(textnode);

        if (isBot)
            node
            .classList
            .add('message', 'down');
        else
            node
            .classList
            .add('message', 'up');

        HTMLCache
            .messagesWindow
            .appendChild(node);

        // scroll to bottom
        // messagesWindow.scrollTop(messagesWindow.scrollHeight);
        HTMLCache.messagesWindow.scrollTop = HTMLCache.messagesWindow.scrollHeight;

        // hide spinner
        HTMLCache
            .spinner
            .classList
            .add('hide');
    }
};

const talkToBot = message => {
    let botReply = '';

    HTMLCache
        .spinner
        .classList
        .remove('hide');

    fetch(`${config.functions.endPoint}?command=${message}`)
        .then(response => {
            if (response.status !== 200) {
                logger('Looks like there was a problem. Status Code: ' + response.status);
                botReply = 'Something not right';
                return;
            }

            // Examine the text in the response  
            response.json().then(data => {
                logger(data);
                appendMessage(data.text, true);
            });
        })
        .catch(error => {
            logger(error);
        })
}

// move this out of render. every re-render binds events again
const bindEvents = () => {
    HTMLCache = {
        messagesWindow: document.querySelector('.messages'),
        messageInput: document.querySelector('#msg_inp'),
        sendButton: document.querySelector('#send_msg'),
        spinner: document.querySelector('.spinner')
    };

    document
        .querySelector('#send_msg')
        .addEventListener('click', e => {
            let message = HTMLCache.messageInput.value;
            appendMessage(message);
            talkToBot(message);
            HTMLCache.messageInput.value = '';
            HTMLCache.messageInput.focus();
        });

    HTMLCache
        .messageInput
        .addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                let message = HTMLCache.messageInput.value;
                appendMessage(message);
                talkToBot(message);
                HTMLCache.messageInput.value = '';
                HTMLCache.messageInput.focus();
            }
        })
};