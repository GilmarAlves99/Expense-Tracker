const {
    create,
    get,
    getId,
    remove,
    update
} = require("../controllers/user")

exports.useRoutes= app=>{
    app.post("/user",create);
    app.get("/user",get);
    app.get("/user/:id",getId);
    app.put("/user/:id",update);
    app.delete("/user/:id",remove);
};