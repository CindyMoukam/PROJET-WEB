

exports.queryAllUser = (connexion, req, res) => {

        connexion.query("SELECT * FROM products", (err, row, fields) => {
            if(err) throw err;
            console.log(row);
            res.json({message: row});
        });
}