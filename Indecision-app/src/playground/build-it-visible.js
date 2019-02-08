let showOrHide = false;
const onVisibility = () => {
    showOrHide = !showOrHide;
    render();
};

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onVisibility}>{showOrHide ? 'Hide details': 'Show details'}</button>
            {showOrHide && <p>Some details here.</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();