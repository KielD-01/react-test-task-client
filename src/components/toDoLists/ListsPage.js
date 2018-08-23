import React from 'react';
import {Lists} from '../../actions/lists';
import {Row} from 'react-materialize'
import {Link} from 'react-router-dom';
//import {auth} from '../../firebase/firebase';
import ListCard from "./ListCard";

import * as routes from '../../constants/routes';

export default class ListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoLists: {}
        };
    };

    componentDidMount() {
        this.loadData();
    };

    loadData = () => {
        Lists.getLists().then((obj) => {
            this.setState({toDoLists: obj.data});
        });
    };

    render() {
        let {toDoLists} = this.state;

        return (
            <div>
                <h1>To Do Lists</h1>
                <Link to={routes.NEWTODOLIST} className="btn btn-primary">Create To Do List</Link>
                <Row>
                    {
                        toDoLists ?
                            Object.keys(toDoLists).map(key => {
                                return (
                                    <div key={key + '123'}>
                                        <ListCard list={toDoLists[key]} id={key}/>
                                    </div>
                                );
                            })
                            : <div></div>
                    }
                </Row>
            </div>
        );
    };
};
