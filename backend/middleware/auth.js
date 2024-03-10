const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.header.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "THIS_TOKEN_IS_FOR_THE_BDE");
        const userId = decodedToken.userId;
        req.auth = {
            useerId: userId
        };
    } catch (error) {
        res.json(401).json({ error })
    }
}