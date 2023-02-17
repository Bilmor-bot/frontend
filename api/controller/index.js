// import auth0 from "auth0-js";
import Model from "../model/Users.js";

export default function (router) {
    const model = new Model();

    /**
     * admin validation by token or whatever
     */
    router.use((req, res, next) => {
        console.log(req.get("Cache-Control"));

        next();
    });

    /**
     * @Route ("/api/admin/users", method="GET")
     * @returns Response
     */
    router.get("/users", async (req, res) => {
        let response = await model.getUsers();

        res.send(response);
    });

    // /**
    //  * @Route ("/api/profile", method="GET")
    //  * @returns Response
    //  */
    // router.get("/api/profile", (req, res) => {
    //     res.send({
    //         id: 1,
    //         name: "Alice"
    //     });
    // });

    // router.get("/auth", (req, res) => {
    //     res.render("pages/Auth/index.njk", {data: {
    //         domain: process.env.USER_POOL_DOMAIN,
    //         clientId: process.env.USER_POOL_CLIENT_ID
    //     }});
    // });

    // router.get("/logout", (req, res) => {
    //     res.redirect(req.query.redirectTo);
    // });

    return router;
}
