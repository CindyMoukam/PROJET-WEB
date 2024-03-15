const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, "THIS_TOKEN_IS_FOR_THE_BDE");
        const user_id = decodedToken.user_id;
        req.auth = {
            user_id: user_id
        };
        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorize" });
    }
}