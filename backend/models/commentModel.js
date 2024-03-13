exports.queryAllcomment = (connexion, req, res) => {

    connexion.query("CALL getAllcomment()", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
        
    });
}

exports.queryPostcomment = ( connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL postcomment(" + "'" + body.id + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryUpdatecomment = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL updatecomment(" + "'" + body.id  + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}


exports.queryRemovecomment = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL removecomment(" + body.id + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}