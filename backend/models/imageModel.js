exports.queryAllImage = (connexion, req, res) => {
    connexion.query("CALL getAllImage()", (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryPostImage = (connexion, req, res) => {
    const body = req.body;
    console.log(req.file);
    console.log(body);

    const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    const userId = body.user_id;
    const eventId = body.event_id;

    const sql = "CALL postImage(?, ?, ?)";
    const values = [imageUrl, userId, eventId];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryUpdateImage = (connexion, req, res) => {
    const body = req.body;
    const name = body.name;
    const description = body.description;
    const id = body.id;

    const sql = "CALL updateImage(?, ?, ?)";
    const values = [name, description, id];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryRemoveImage = (connexion, req, res) => {
    const body = req.body;
    const id = body.id;

    const sql = "CALL removeImage(?)";
    const values = [id];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}
