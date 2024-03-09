exports.queryAllEvent = (connexion, req, res) => {

    connexion.query("CALL getAllEvent()", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryPostEvent = ( connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL postEvent(" + "'" + body.name + "'"  + "," + "'" + body.description + "'" + "," + "'" + body.statuts + "'" + "," + "'" + body.prix + "'" + "," + "'" + body.start_time + "'" +  "," + "'" +body.end_time + "'" +  ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryUpdateEvent = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL updateEvent(" + "'" + body.name + "'" + "," + "'" + body.description + "'" + "," + "'" + body.statuts + "'" + "," + "'" + body.prix + "'" + "," + "'" + body.start_time + "'" +  "," + "'" +body.end_time + "'" +  ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryRemoveEvent = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL removeEvent(" + body.id + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}