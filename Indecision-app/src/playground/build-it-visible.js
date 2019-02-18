class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false,
            visibleText: 'Show details',
            hiddenText: false
        };
    }
    handleToggleVisibility() {
        if(this.state.visible) {
            this.setState(() => {
                return {
                    visible: false,
                    visibleText: 'Show details',
                    hiddenText: false
                }
            });
        } else {
            this.setState(() => {
                return {
                    visible: true,
                    visibleText: 'Hide details',
                    hiddenText: 'Hidden tekst'
                }
            });
        }
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibleText}</button>
                <p>{this.state.hiddenText}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
