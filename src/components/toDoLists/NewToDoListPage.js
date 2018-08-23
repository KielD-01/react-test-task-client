import React from 'react';
import {Row, Input, Button} from 'react-materialize'
import {Lists} from '../../actions/lists';

export default class NewToDoListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toDoList: {}
        };
    };

    submitForm = () => {
        let {toDoList} = this.state;

        Lists.createToDoList(toDoList).then(obj => {
            this.props.history.push('/');
        })
    };

    updateValue(name, value) {
        this.setState(
            (prevState) => ({
                toDoList: Object.assign({}, prevState.toDoList, {
                    [name]: value
                })
            })
        )
    };

    render() {
        let {toDoList} = this.state;

        return (
            <div>
                <h1>New ToDoList!</h1>

                <Row>
                    <Input s={12} label="Title"
                           value={toDoList.title || ''}
                           onChange={(v) => {
                               this.updateValue('title', v.target.value)
                           }}/>
                </Row>

                <Row>
                    <Button
                        onClick={this.submitForm}>
                        Create To Do List
                    </Button>
                </Row>
            </div>
        );
    }
}