import * as React from 'react';
import { Helmet } from 'react-helmet';

import Button from 'app/components/Button';
// import Logo from 'app/assets/logo.svg';

interface IProps {
  startCount?: number
}

interface IState {
  counter: number
}

class Form extends React.Component<IProps, IState> {

  public state = {
    counter: 1
  }

  public handleOnClick = () => {
    this.setState({ counter: (this.state.counter + 1) })
  }

  public render = () => (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Form page</title>
      </Helmet>
      <div className="form">
        I have been clicked {this.state.counter} times!
      <Button className="form__button" name="counter" size="large" onClick={this.handleOnClick} />
        {/* <img src={Logo} /> */}
      </div>
    </>
  );

}


export default Form;
