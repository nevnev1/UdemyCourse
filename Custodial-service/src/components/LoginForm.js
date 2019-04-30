import React from 'react';
import bcrypt from 'bcryptjs';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: ""
        };
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }))
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.email || !this.state.password) {
            this.setState(() => ({ error: "Please provide email and password" }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                email: this.state.email,
                password: bcrypt.hashSync(this.state.password, 10)
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Email"
                        autoFocus
                        onChange={this.onEmailChange}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        onChange={this.onPasswordChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}