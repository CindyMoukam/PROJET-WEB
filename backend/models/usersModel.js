const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.queryAllUsers = (connexion, req, res) => {
    connexion.query("CALL getAllUsers()", (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryOneUser = (connexion, req, res) => {
    const userId = req.params.id;

    const sql = "CALL getOneUser(?)";
    const values = [userId];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryPostUser = async (connexion, req, res) => {

    const { name, surname, location, email, password} = req.body;
    
    // bcrypt for encode the user password
    await bcrypt.hash(password, 10)
    .then( hash => {
    
        const sql = "CALL postUser(?, ?, ?, ?, ?)";
        const values = [name, surname, location, email, hash];
        
        connexion.query(sql, values, (err, row, fields) => {
            if (err) throw err;
            console.log(row);
            res.json({ message: row });
        });

    })
    .catch(err => res.status(500).json({ err }));
}

exports.queryUpdateUser = (connexion, req, res) => {
    const body = req.body;
    const { name, surname, location, email, password, id } = body;

    const sql = "CALL updateUser(?, ?, ?, ?, ?, ?)";
    const values = [name, surname, location, email, password, id];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryRemoveUser = (connexion, req, res) => {
    const userId = req.params.id;

    const sql = "CALL removeUser(?)";
    const values = [userId];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryLoginUser = async (connexion, req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const sql = "SELECT * FROM users WHERE Email = ?";
    const values = [email];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        if (row.length === 0) {
            return res.status(500).json({ message: "Username or password incorrect !" });
        } else {

            const user = row[0];

            bcrypt.compare(password, user.Password)
            .then( valid => {
                if(!valid){
                    return res.status(401).json({ err: "Incorrect password or email !"});
                } else {
                    res.status(200).json({
                        user_id: user.id,
                        token: jwt.sign(
                            {user_id: user.id},
                            "THIS_TOKEN_IS_FOR_THE_BDE",
                            {expiresIn: "24h"}
                        )
                    });
                }
            })
            //res.json({ message: "Connexion successful !" });
        }
    });
}