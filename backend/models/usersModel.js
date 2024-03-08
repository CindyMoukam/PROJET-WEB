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
exports.querydropUsers = (connect, req, res) => {
    connexion.query("CALL DropUser("+ req.name + "," + req.surname + "," + req.location + "," + req.email + "," + req.password + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });

}