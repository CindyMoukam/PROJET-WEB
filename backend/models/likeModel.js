

exports.queryPostlike = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL postlike(" + "'" + body.Id_user + "'"  + "," +"'" + body.Id_image + "'" + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    }); 
    
}

exports.queryUpdatelike = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL updatelike(" + "'" + body.Id_user  + "'"  + "," +"'" + body.Id_image + "'" + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryRemovelike = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL removelike(" + body.id + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}