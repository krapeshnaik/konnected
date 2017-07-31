import testHTML from 'JSRoot/components/index.component.js';
import LayoutCss from 'SASSRoot/index.scss';

export default () => {
    document
        .querySelector('.router-view')
        .innerHTML = testHTML;
}