const _ = require('lodash');

module.exports = {
    getClients: (req, res) => {
        const db = req.app.get('db');
        db.clients.get_clients().then(resp => {
            res.send(resp)
        })
    },

    addClient: (req, res) => {
        const { name, email } = req.body;
        const db = req.app.get('db');
        db.clients.create_client(name, email).then(resp => {
            res.send(resp)
        })
    },

    unsubscribe: (req, res) => {
        const { email } = req.body;
        const db = req.app.get('db');
        db.clients.update_unsubscribe(email).then(client => {
           if( !_.isEmpty(client)) {
               res.send(client)
           } else {
               res.send(false)
           }
        })
    }
}