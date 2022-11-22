import auth0 from 'auth0-js';

export default function (router) {
    /**
     * @Route ("/user", method="GET")
     * @returns Response
     */
    router.get("/user", (req, res) => {
        console.log(auth0);

        res.send("hi user\n");
    });

    return router;
}
