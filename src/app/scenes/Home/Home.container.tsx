import { connect } from 'react-redux';

import { IState } from 'app/services/reducer';
import { login } from 'app/services/user/user.actions';

import Home from './Home';

const mapStateToProps = (state: IState) => ({
    redux_isLoggedIn: state.user.isLoggedIn,
    redux_user: state.user.user,
})

const mapDispatchToProps = (dispatch: any) => ({
    redux_login: (username: string, password: string) => dispatch(login(username, password))
})

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;