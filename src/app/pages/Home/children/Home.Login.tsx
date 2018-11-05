import * as React from 'react';

import Button from 'app/components/Button';

export interface IHomeLoginProps {
    login: (username: string, password: string) => void
}

interface IState {
    password: string;
    username: string;
}

class Login extends React.Component<IHomeLoginProps, IState> {

    public state = {
        password: '',
        username: ''
    }

    public render = () => (
        <>
            <input
                type="text"
                name="username"
                className="loginForm__username"
                value={this.state.username}
                onChange={this.onInputChange}
            />
            <input
                type="password"
                name="password"
                className="loginForm__password"
                value={this.state.password}
                onChange={this.onInputChange}
            />
            <Button name="Login" size="large" onClick={(this.onClick)} />
        </>
    );

    private onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const state = { ...this.state };
        state[event.target.name] = event.target.value;
        this.setState(state);
    };

    private onClick = () => {
        this.props.login(this.state.username, this.state.password);
    }

}


export default Login