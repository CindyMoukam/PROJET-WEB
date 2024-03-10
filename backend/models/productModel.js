exports.queryAllProducts = (connexion, req, res) => {
    connexion.query("CALL getAllProducts()", (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryOneProduct = (connexion, req, res) => {
    const productId = req.params.id;

    const sql = "CALL getOneProduct(?)";
    const values = [productId];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryPostProduct = (connexion, req, res) => {
    const body = req.body;
    const { name, description, image, category, price, quantity, sold } = body;

    const sql = "CALL postProduct(?, ?, ?, ?, ?, ?, ?)";
    const values = [name, description, image, category, price, quantity, sold];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryUpdateProduct = (connexion, req, res) => {
    const body = req.body;
    const { name, description, image, category, price, quantity, sold, id } = body;

    const sql = "CALL updateProduct(?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [name, description, image, category, price, quantity, sold, id];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryRemoveProduct = (connexion, req, res) => {
    const productId = req.params.id;

    const sql = "CALL removeProduct(?)";
    const values = [productId];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}
