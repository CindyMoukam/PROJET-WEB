exports.queryAllProducts = (connexion, req, res) => {

    connexion.query("CALL getAllProducts()", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryOneProduct = (connexion, req, res) => {

    // The user id
    const productId = req.params.id;

    connexion.query("CALL getOneProduct(" + productId + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryPostProduct = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL postProduct(" + "'" + body.name + "'" + "," + "'" + body.description + "'" + "," + "'" + body.image + "'" + "," + "'" + body.category + "'" + "," + "'" + body.price + "'" + "," + "'" + body.quantity + "'" + "," + "'" + body.sold + "'" + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryUpdateProduct = (connexion, req, res) => {

    const body = req.body;

    connexion.query("CALL updateProduct(" + "'" + body.name + "'" + "," + "'" + body.description + "'" + "," + "'" + body.image + "'" + "," + "'" + body.category + "'" + "," + "'" + body.price + "'" + "," + "'" + body.quantity + "'" + "," + "'" + body.sold + "'" + "," + body.id  + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}

exports.queryRemoveProduct = (connexion, req, res) => {

    // The user id
    const productId = req.params.id;

    connexion.query("CALL removeProduct(" + productId + ")", (err, row, fields) => {
        if(err) throw err;
        console.log(row);
        res.json({message: row});
    });
}