import Konnected from '@root/app_scope.js';

export default () => {
    if (!Konnected.isLoggedIn) {
        window.location.hash = '#logged-out';
    }
}