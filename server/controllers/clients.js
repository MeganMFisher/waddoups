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
    }
}