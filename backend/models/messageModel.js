exports.queryAllmessage = (connexion, req, res) => {

    connexion.query("CALL getAllmessage()", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
        
    });
}

exports.queryPostmessage = ( connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL postmessage(" + "'" + body.id + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryUpdatemessage = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL updatemessage(" + "'" + body.id  + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}


exports.queryRemovemessage = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL removemessage(" + body.id + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}