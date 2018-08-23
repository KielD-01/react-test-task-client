import React from 'react';
import {auth} from '../firebase/firebase';
//import Auth from './../../actions/modules/Auth';
//import {logout} from './../../actions/actions.jsx';
import {Link} from 'react-router-dom';

import * as routes from '../constants/routes';


export default class Header extends React.Component {

    constructor() {
        super();

        this.state = {};
    };

    componentWillMount() {
        if (localStorage && localStorage.length !== 0 && localStorage.user) {
            let token = JSON.parse(localStorage.user).uid;
            this.setState({token: token});
        }
    }

    logOutButton = () => {
        auth.signOut().then(() => {
            localStorage.setItem('user', JSON.stringify({loggedIn: false}));
        })
    };

    render() {
        const {token} = this.state;
        //console.log(token);
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <Link to='/' className='navbar-brand'>Firebase</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                {token ?
                                    <Link to='#' onClick={this.logOutButton}>Log out</Link>
                                    : <Link to={routes.SIGN_IN}>Log in</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};
