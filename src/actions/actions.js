const agent = require('superagent-promise')(require('superagent'), Promise);

export const Actions = {
    agent,
    token() {
        return `Token ${JSON.parse(localStorage.getItem('front')).token}`;
    },
    url: "https://us-central1-todo-list-8f8d9.cloudfunctions.net/api",
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.body;
        }

        throw new Error(response.statusText)
    }
}