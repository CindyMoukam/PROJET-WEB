exports.queryAllUsers = (connexion, req, res) => {

    connexion.query("CALL getAllUsers()", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryOneUser = (connexion, req, res) => {

    // The user id
    const userId = req.params.id;

    connexion.query("CALL getOneUser(" + userId + ")", (err, row, fields) => {
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

    // The user id
    const usertId = req.params.id;

    connexion.query("CALL removeUser(" + usertId + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}