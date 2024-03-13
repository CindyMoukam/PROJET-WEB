exports.queryAllIdea = (connexion, req, res) => {
    connexion.query("CALL getAllIdea()", (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryPostIdea = (connexion, req, res) => {
    const body = req.body;
    const { name, description, id } = body;

    const sql = "CALL postIdea(?, ?, ?)";
    const values = [name, description, id];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryUpdateIdea = (connexion, req, res) => {
    const body = req.body;
    const { name, description, id } = body;

    const sql = "CALL updateIdea(?, ?, ?)";
    const values = [name, description, id];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryRemoveIdea = (connexion, req, res) => {
    const body = req.body;
    const { id } = body;

    const sql = "CALL removeIdea(?)";
    const values = [id];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}
