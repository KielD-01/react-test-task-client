import React from 'react';
import {Lists} from './../../actions/lists';
import {Row, Input, Button} from 'react-materialize'

export default class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoList: {
                items: {},
                title: '',
            },
            item: {
                text: '',
                completed: false
            }
        };
    };

    componentDidMount() {
        this.loadData();
    };

    loadData = () => {
        Lists.getToDoList(this.props.match.params.id).then(obj => {
            if (obj.data) this.setState({toDoList: {items: obj.data.items, title: obj.data.title}});
        })
    };

    updateToDoListItem = (listId, itemId, data) => {
        data.completed = !data.completed;

        Lists.updateToDoListItem(listId, itemId, data).then(() => {
            this.loadData();
        });
    };

    updateValueForItem = (name, value) => {
        this.setState(
            (prevState) => ({
                item: Object.assign({}, prevState.item, {
                    [name]: value
                })
            })
        )
    };

    countCompletedTasks = () => {
        let count = 0;
        let {toDoList} = this.state;

        if (toDoList.items) {
            Object.keys(toDoList.items).map(key => {
                toDoList.items[key].completed ? count += 1 : '';
            });
        }
        return count;
    };

    countNotCompletedTasks = () => {
        let count = 0;
        let {toDoList} = this.state;

        if (toDoList.items) {
            Object.keys(toDoList.items).map(key => {
                toDoList.items[key].completed ? '' : count += 1;
            });
        }
        return count;
    };

    countAllTasks = () => {
        let {toDoList} = this.state;

        return toDoList.items ? Object.keys(toDoList.items).length : 0;
    }

    createNewItem = (listId) => {
        let {item} = this.state;

        Lists.createItem(listId, item).then(() => {
            this.setState({item: {text: ''}}, this.loadData());
        });

    };

    deleteItem = (listId, itemId) => {
        Lists.deleteToDoListItem(listId, itemId).then(() => {
            this.loadData();
        })

    };

    deleteCard = (listId) => {
        Lists.deleteToDoList(listId).then(() => {
            this.props.history.push('/');
        })
    };


    render() {
        let {toDoList} = this.state;
        let listId = this.props.match.params.id;

        return (
            <div>
                <h1>{toDoList.title}</h1>
                <p>All tasks: {this.countAllTasks()}</p>
                <p>Completed: {this.countCompletedTasks()}</p>
                <p>Not Completed: {this.countNotCompletedTasks()}</p>
                <Row>
                    {
                        toDoList.items !== undefined && Object.keys(toDoList).length !== 0 ?
                            Object.keys(toDoList.items).map(key => {
                                let item = toDoList.items[key];

                                return (
                                    <Row key={key}>
                                        <Input type='checkbox' value=' '
                                               label=' ' checked={item.completed}
                                               onClick={() => this.updateToDoListItem(listId, key, item)}/>
                                        <Input type="text" value={item.text || ''} onChange={(v) => {
                                            this.updateValueForItem({'text': v.target.value})
                                        }}/>
                                        <Button onClick={() => {
                                            window.confirm('Are you sure to delete this item?') ? this.deleteItem(listId, key) : ''
                                        }}> Delete card</Button>
                                    </Row>
                                )
                                    ;
                            })
                            : ''
                    }
                </Row>

                <h3>Add New Task!</h3>

                <Row>
                    <Input placeholder="New Task"
                           value={this.state.item.text || ''}
                           onChange={(v) => {
                               this.updateValueForItem('text', v.target.value)
                           }}/>
                    <Button onClick={() => {
                        this.createNewItem(listId)
                    }}>Add task</Button>
                </Row>
                <Button onClick={() => {
                    window.confirm('Are you sure to delete this card?') ? this.deleteCard(listId) : ''
                }}> Delete card</Button>
            </div>
        );
    }
}