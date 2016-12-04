import $ from 'jquery';
import ReactDOM from 'react-dom';

import router from './router';

let backToTop = (`
    <button id="back-to-top">
        <img src="/assets/images/icons/arrow.svg"/>
    </button>
    `)

function goToTop() {
    $("html, body").animate({ scrollTop: 0 }, 600);
}

function handleScrolling(e) {
    if (document.scrollingElement.scrollTop >= 500) {
        if ($('#back-to-top').length !== 1) {
            $('#container').append(backToTop);
            $('#back-to-top').on('click', goToTop);
        }
    }
    else {
        $('#back-to-top').remove();
    }
}

ReactDOM.render(router, document.getElementById('container'));

window.addEventListener('scroll', handleScrolling);
