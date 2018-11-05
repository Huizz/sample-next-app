import React from 'react';

import Button from 'app/components/Button';

export interface IHomeProfileProps {
    history?: any;
    username: string;
    goToAction: () => void;
}

class Profile extends React.Component<IHomeProfileProps, any> {
    public render = () => (
        <>
            <div>Welcome, {this.props.username}</div>
            <Button name="Go to form" size="large" onClick={this.props.goToAction} />
        </>
    );
}

export default Profile;
