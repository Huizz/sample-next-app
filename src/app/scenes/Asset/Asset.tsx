import * as React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'next/router';

interface IProps {
    router: any;
}

class Asset extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render = () => {
        const { router } = this.props;
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Asset page</title>
                </Helmet>
                <div className="content">
                    <p>This is a page with dynamic routing</p>
                    <p>This is the asset id: {router.query ? router.query.id : ''}</p>
                </div>
            </>
        );
    }
}

export default withRouter(Asset);
