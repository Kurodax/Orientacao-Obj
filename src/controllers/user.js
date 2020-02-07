class ListController {

    index(req, res) {
        res.json({
            messages: "Get OK"
        })
    }
    store(req, res) {
        res.json({
            messages: "Post OK"
        })
    }
    update(req, res) {
        res.json({
            messages: "Put OK"
        })
    }
    destroy(req, res) {
        res.json({
            messages: "Delete OK"
        })
    }
    show(req, res) {
        res.json({
            messages: "Show OK"
        })
    }
}
module.exports = new ListController()