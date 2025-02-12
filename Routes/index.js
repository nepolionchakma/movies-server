const Router = require("express");
const routes = Router();

// routes
const testData = require("../Routes/testData");
routes.use("/test", testData);
// const defPersonsRoutes = require("../Routes/defPersonsRoutes");
// const defUsersRoutes = require("../Routes/defUsersRoutes");

// routes.use("/persons", defPersonsRoutes);
// routes.use("/users", defUsersRoutes);
module.exports = routes;
