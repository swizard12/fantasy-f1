module.exports = (app, db) => {
    app.get("/team/:id", (req, res) =>
        db.team.findById(req.params.id).then((result) => res.json(result))
    );
}