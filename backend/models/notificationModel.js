exports.queryAllNotification = (connexion, req, res) => {
    connexion.query("CALL getAllNotification()", (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryOneNotification = (connexion, req, res) => {
    const notificationId = req.params.id;

    const sql = "CALL getOneNotification(?)";
    const values = [notificationId];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryPostNotification = (connexion, req, res) => {
    const body = req.body;
    const { content, id_user, date } = body;

    const sql = "CALL postNotification(?, ?, ?, ?, ?, ?)";
    const values = [content, id_user, date];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row, status: "ok" });
    });
}

exports.queryUpdateNotification = (connexion, req, res) => {
    const body = req.body;
    const { content, date} = body;

    const sql = "CALL updateNotification(?, ?)";
    const values = [content, date];

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}

exports.queryRemoveNotification = (connexion, req, res) => {
    const notificationId = req.body.id;

    const sql = "CALL removeNotification(?)";
    const values = [notificationId];
    console.log(notificationId);

    connexion.query(sql, values, (err, row, fields) => {
        if (err) throw err;
        console.log(row);
        res.json({ message: row });
    });
}
