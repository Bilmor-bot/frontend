export default function (router) {
    /**
     * @Route ("/admin", method="GET")
     * @returns Response
     */
    router.get("/admin", (req, res) => {
        res.render("pages/Admin/index.njk");
    });

    /**
     * @Route ("/user", method="GET")
     * @returns Response
     */
    router.get("/user", (req, res) => {
        res.send("hi user\n");
    });

    return router;
}
