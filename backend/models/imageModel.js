exports.queryAllImage = (connexion, req, res) => {

    connexion.query("CALL getAllImage()", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryPostImage = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL postImage(" + "'" + body.name + "'" + "," + "'" + body.description + "'" + ","  + body.id  + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryUpdateImage = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL updateImage(" + "'" + body.name + "'" + "," + "'" + body.description + "'" + ","  + body.id  + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryRemoveImage = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL removeImage(" + body.id + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}