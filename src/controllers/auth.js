const { getUser } = require("../repositories/auth")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { authValidation } = require("../validations/auth");


exports.login = async (req, res) => {
    try {
        const data = await authValidation.parse(req.body);
       const user = await getUser(data.email);
     
        if (!user) throw { message: "usuário não existe" };

        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    name: user.name
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '1h',
                }
            );
            return res.status(200).send({ token })
           }
        {
            return res.status(401).send({ message: "Usuário e/ou senha incorretos" })
        }
    } catch (e) {
        console.log("Erro durante o login:", e);
        res.status(401).send({ message: "Falha na autenticação. Verifique suas credenciais." });
    }
}