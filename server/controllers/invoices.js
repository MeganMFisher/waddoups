module.exports = {
    getInvoices: (req, res) => {
        const db = req.app.get('db');
        db.invoices.get_invoices().then(resp => {
            res.send(resp)
        })
    },

    addInvoice: (req, res) => {
        const { total, client_email, client_name, purchased } = req.body;
        const db = req.app.get('db');
        db.invoices.create_invoice(total, client_email, client_name, purchased).then(resp => {
            res.send(resp)
        })
    }
}