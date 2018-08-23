import {Actions} from './actions'

export const Lists = {
    getLists: () => {
        return Actions.agent.get(`${Actions.url}/`)
            .then(Actions.checkStatus)
            .then(json => json)
            .catch(err => err);
    },

    getToDoList(id) {
        return Actions.agent.get(`${Actions.url}/todo/${id}`)
            .then(Actions.checkStatus)
            .then(json => json)
            .catch(err => err);
    },

    updateToDoListItem(listId, itemId, data) {
        return Actions.agent.patch(`${Actions.url}/todo/${listId}/item/${itemId}`)
            .send(data)
            .then(Actions.checkStatus)
            .then(json => json)
            .catch(err => err);
    },

    createItem(itemId, data) {
        return Actions.agent.post(`${Actions.url}/todo/${itemId}`)
            .send(data)
            .then(Actions.checkStatus)
            .then(json => json)
            .catch(err => err);
    },

    createToDoList(data) {
        return Actions.agent.post(`${Actions.url}/todo`)
            .send(data)
            .then(Actions.checkStatus)
            .then(json => json)
            .catch(err => err);
    },

    deleteToDoList(id) {
        return Actions.agent.del(`${Actions.url}/todo/${id}`)
            .then(Actions.checkStatus)
            .then(json => json)
            .catch(err => err);
    },

    deleteToDoListItem(listId, itemId) {
        return Actions.agent.del(`${Actions.url}/todo/${listId}/item/${itemId}`)
            .then(Actions.checkStatus)
            .then(json => json)
            .catch(err => err);
    }
}