module.exports = (app, db) => {
    app.get("/drivers", (req, res) =>
        db.driver.findAll().then((result) => res.json(result))
    );

    app.get("/driver/:id", (req, res) =>
        db.driver.findById(req.params.id).then((result) => res.json(result))
    );

    app.post("/driver", (req, res) =>
        db.driver.create({
            name: req.body.name,
            price: req.body.price
        }).then((result) => res.json(result))
    );

    app.put("/driver/:id", (req, res) =>
        db.driver.update({
            name: req.body.name,
            price: req.body.price
        },
        {
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result))
    );

    app.delete("/post/:id", (req, res) =>
        db.driver.destroy({
            where: {
                id: req.body.id
            }
        }).then((result) => res.json(result))
    );
}