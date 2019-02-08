'use strict';

var showOrHide = false;
var onVisibility = function onVisibility() {
    showOrHide = !showOrHide;
    render();
};

var appRoot = document.getElementById('app');
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onVisibility },
            showOrHide ? 'Hide details' : 'Show details'
        ),
        showOrHide && React.createElement(
            'p',
            null,
            'Some details here.'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
