import * as React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'next/router'
import Link from 'next/link'

import Button from 'app/components/Button';
// import Logo from 'app/assets/logo.svg';

interface IProps {
  startCount?: number,
  router: any
}

interface IState {
  counter: number,
  asset?: {
    id: number,
    title: string
  }
}

class Form extends React.Component<IProps, IState> {
  public state = {
    counter: 1,
    asset: {
      id: 15,
      title: 'car'
    }
  };

  componentWillMount = () => {
    console.log('running client side')
  }

  public handleOnClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  public handleAssetOnClick = () => {
    this.props.router.push({
      pathname: '/asset',
      query: { id: this.state.asset.id }
    }, `/asset/${this.state.asset.id}`)
  }

  public render = () => {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Form page</title>
        </Helmet>
        <div className="form">
          I have been clicked {this.state.counter} times!
          <Button
            className="form__button"
            name="counter"
            size="large"
            onClick={this.handleOnClick}
          />
          {/* <img src={Logo} /> */}
        </div>
        <div>
          <Link
            as={`/asset/${this.state.asset.id}`}
            href={`/asset?id=${this.state.asset.id}`}>
            <a>Go to {this.state.asset.title}</a>
          </Link>
          <Button
            className="asset__button"
            name="Go to asset"
            size="large"
            onClick={this.handleAssetOnClick}
          />
        </div>
       
      </>
    );
  };
}


export default withRouter(Form);
