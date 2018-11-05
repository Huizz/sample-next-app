import * as React from 'react';

import Login from './children/Home.Login';
import Profile from './children/Home.Profile';

import { LanguageContext, LanguageConsumer } from 'app/utils/translation/LanguageProvider';

import { FormattedMessage } from 'react-intl';

interface IProps {
    redux_login: (username: string, password: string) => void;
    redux_user?: any;
    redux_isLoggedIn: boolean;
    history?: any;
}


class Home extends React.Component<IProps, any> {
    static contextType = LanguageContext;

    public render = () => {

      let content = <Login login={this.onLoginClick} />;
      if(this.props.redux_isLoggedIn){
        content = <Profile username={this.props.redux_user.name} goToAction={this.onGoToFormClick}/>;
      }

      return (
        <div>
            <LanguageConsumer>
                {value => (
                    <select onChange={value.updateLanguage}>
                        <option value='en'>English</option>
                        <option value='zh'>Chinese</option>
                    </select>
                )}
            </LanguageConsumer>
            <div>hello</div>
            {content}
            <p>This is directly from context: {this.context.messages.test}</p>
            <p>This is from react-intl: <FormattedMessage id="test" /></p>
        </div>
      )
    };

    private onLoginClick = (username: string, password: string) => {
        this.props.redux_login(username, password);
    };

    private onGoToFormClick = () => {
        this.props.history.push('/client/form');
    }

}

export default Home;
