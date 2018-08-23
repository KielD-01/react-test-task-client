import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Header from './Header';
import ListsPage from './toDoLists/ListsPage';
import NewToDoListPage from './toDoLists/NewToDoListPage';
import ToDoListItem from './toDoLists/ToDoListItem';
import SignInPage from './SignIn';

import * as routes from '../constants/routes';

const App = () =>
    <div>
        <Router>
            <div>
                <Header/>
                <div className="container">
                    <Route
                        exact path={routes.TODOLISTS}
                        component={ListsPage}
                    />
                    <Route
                        exact path="/todo/:id"
                        component={ToDoListItem}
                    />
                    <Route
                        exact path={routes.NEWTODOLIST}
                        component={NewToDoListPage}
                    />
                    <Route
                        exact path={routes.SIGN_IN}
                        component={SignInPage}
                    />
                </div>
            </div>
        </Router>
    </div>

export default App;
