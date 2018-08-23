import React from "react";
import {Col, Card} from 'react-materialize'
import {Link} from 'react-router-dom';

import * as routes from '../../constants/routes';

const ListCard = props => {
    let {list, id} = props;

    return (
        <div key={props.id + '_card'}>
            <Col className="m4 l3">
                <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                      actions={[<Link to={routes.TODOLIST + id}>Show To Do List</Link>]}>
                    {list.title}
                </Card>
            </Col>
        </div>
    );
};

export default ListCard;
