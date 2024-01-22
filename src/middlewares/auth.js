const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({ message: "TOKEN é obrigatório" })
    }
    try {
        // removendo a palavra Bearer e substituindo
        const replace = token.replace("Bearer ", "")
        const decoded = jwt.verify(replace, process.env.TOKEN_KEY)
        next();
    }
    catch (e) {
        return res.status(401).send({ message: "credenciais incorretas" })
    }
}