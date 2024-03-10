exports.queryAllcategory = (connexion, req, res) => {

    connexion.query("CALL getAllcategory()", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryPostcategory = ( connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL postcategory(" + "'" + body.name + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryUpdatecategory = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL updatecategory(" + "'" + body.name  + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryRemovecategory = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL removecategory(" + body.id + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}