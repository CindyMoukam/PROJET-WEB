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
    console.log(req.file);
    const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    const { name, description, category, price, quantity } = body;

    const sql = "CALL postProduct(?, ?, ?, ?, ?, ?)";
    const values = [name, description, imageUrl, category, price, quantity];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row, status: "ok" });
    });
}

exports.queryUpdateProduct = (connexion, req, res) => {
    const body = req.body;
    const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    const { name, description, category, price, quantity, sold, id } = body;

    const sql = "CALL updateProduct(?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [name, description, imageUrl, category, price, quantity, sold, id];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryRemoveProduct = (connexion, req, res) => {
    const productId = req.body.id;

    const sql = "CALL removeProduct(?)";
    const values = [productId];
    console.log(productId);

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}
