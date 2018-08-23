import React from 'react';
import {auth} from '../firebase/firebase';
import {Button} from 'react-materialize'

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    };

    loginButton = () => {
        auth.signInAnonymously().catch(error => {
            auth.onAuthStateChanged(user => {
                console.log(user);
                if (user) {
                    localStorage.setItem('user', JSON.stringify({loggedIn: true, uid: user.uid}));
                }
            })
        });
    };

    render() {
        return (
            <div className='LogIn'>
                <div className='col-md-4 col-md-offset-4'>
                    <h2>Login form</h2><br/>

                    <Button
                        onClick={this.loginButton}>
                        Sign in
                    </Button>
                </div>
            </div>
        );
    };
}
