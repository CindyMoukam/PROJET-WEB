exports.queryAllUsers = (connexion, req, res) => {
    connexion.query("CALL getAllUsers()", (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryOneUser = (connexion, req, res) => {
    const userId = req.params.id;

    const sql = "CALL getOneUser(?)";
    const values = [userId];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryPostUser = (connexion, req, res) => {
    const body = req.body;
    const { name, surname, location, email, password } = body;

    const sql = "CALL postUser(?, ?, ?, ?, ?)";
    const values = [name, surname, location, email, password];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryUpdateUser = (connexion, req, res) => {
    const body = req.body;
    const { name, surname, location, email, password, id } = body;

    const sql = "CALL updateUser(?, ?, ?, ?, ?, ?)";
    const values = [name, surname, location, email, password, id];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryRemoveUser = (connexion, req, res) => {
    const userId = req.params.id;

    const sql = "CALL removeUser(?)";
    const values = [userId];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}
