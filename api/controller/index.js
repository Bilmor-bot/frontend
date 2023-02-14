// import auth0 from "auth0-js";

export default function (router) {
    /**
     * @Route ("/admin", method="GET")
     * @returns Response
     */
    router.get("/admin", (req, res) => {
        res.render("pages/Admin/index.njk");
    });

    /**
     * @Route ("/profile", method="GET")
     * @returns Response
     */
    router.get("/profile", (req, res) => {
        res.render("pages/Profile/index.njk");
    });

    router.get("/auth", (req, res) => {
        res.render("pages/Auth/index.njk", {data: {
            domain: process.env.USER_POOL_DOMAIN,
            clientId: process.env.USER_POOL_CLIENT_ID
        }});
    });

    router.get("/logout", (req, res) => {
        res.redirect(req.query.redirectTo);
    });

    return router;
}
