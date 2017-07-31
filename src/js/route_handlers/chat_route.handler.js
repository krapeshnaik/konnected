import testHTML from 'JSRoot/components/chat.component.js';

export default () => {
    document
        .querySelector('.router-view')
        .innerHTML = testHTML;
}