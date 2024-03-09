exports.queryAllUsers = (connexion, req, res) => {

    connexion.query("CALL getAllUsers()", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryPostUser = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL postUser(" + "'" + body.name + "'" + "," + "'" + body.surname + "'" + "," + "'" + body.location + "'" + "," + "'" + body.email + "'" + "," + "'" + body.password + "'" + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryUpdateUser = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL updateUser(" + "'" + body.name + "'" + "," + "'" + body.surname + "'" + "," + "'" + body.location + "'" + "," + "'" + body.email + "'" + "," + "'" + body.password + "'"  + "," + body.id  + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryRemoveUser = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL removeUser(" + body.id + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}