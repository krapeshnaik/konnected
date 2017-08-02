'use strict';

export default data => {
    return `<div class="logged-out-container animated zoomIn">
        <div class="message">
            <div>You are not logged in.</div>
            <div>Please <a href="#">login</a> to continue</div>
        </div>
    </div>`;
}