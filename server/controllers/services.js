module.exports = {
    getServices: (req, res) => {
        const db = req.app.get('db');
        db.services.get_services().then(resp => {
            res.send(resp)
        })
    },

    addService: (req, res) => {
        const { name, price, description } = req.body;
        const db = req.app.get('db');
        db.services.create_service(name, price, description).then(resp => {
            res.send(resp)
        })
    },

    updateService: (req, res) => {
        const { name, price, description } = req.body;
        const { id } = req.query;
        const db = req.app.get('db');
        db.services.update_service(price, name, description, id).then(resp => {
            res.send(resp)
        })
    },

    deleteService: (req, res) => {
        const { id } = req.query;
        const db = req.app.get('db');
        db.services.delete_service(id).then(resp => {
            res.send(resp)
        })
    }
}