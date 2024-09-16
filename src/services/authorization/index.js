import auth0 from 'auth0-js';

import ProfileEntity from "src/core/entities/profile/Profile";

class Authorization {
    constructor() {
        this.userPool = new auth0.WebAuth({
            // silentRefreshRedirectUri
            domain: 'delicate-disk-4064.eu.auth0.com',
            clientID: 'U7nzxfHe8tXAqZ6TcJvT3yAPuBLvO5S9',
            audience: `https://delicate-disk-4064.eu.auth0.com/api/v2/`,
            scope: 'openid read:current_user update:current_user update:current_user_metadata',  // update:users
            responseType: "token"
        });

        this.management = new auth0.Management({
            domain: 'delicate-disk-4064.eu.auth0.com',
            token: localStorage.getItem("token") || ""
        });

        // this.authentication = new auth0.Authentication({
        //     domain: 'delicate-disk-4064.eu.auth0.com',
        //     clientID: 'U7nzxfHe8tXAqZ6TcJvT3yAPuBLvO5S9',
        //     responseType: "token"
        // });

        this.user = JSON.parse(
            localStorage.getItem("user") ||
            JSON.stringify({
                id: ""
            })
        );
    }

    /**
     * @pubic
     * @method isAuthorized
     * @return {boolean}
     */
    isAuthorized() {
        return Boolean(localStorage.getItem("token"));
    }

    /**
     * @pubic
     * @method register
     * @param user {Object}
     * @param success {Function}
     * @param error {Function}
     */
    register(user, success, error) {
        this.userPool.signup({
            email: user.email,
            password: user.password,
            connection: "Username-Password-Authentication"
        }, (e, response) => {
            console.log(e, response);
        });
    }

    /**
     * @pubic
     * @method login
     * @param user {Object}
     * @param success {Function}
     * @param error {Function}
     */
    login(user, success, error) {
        // this.userPool.crossOriginVerification();

        localStorage.setItem("loginFromUrl", window.location.href);

        this.userPool.login({
            username: user.email,
            password: user.password,
            realm: "Username-Password-Authentication",
            responseType: "token",
            redirectUri: `https://local.bilmor.online:8443/auth?redirectTo${window.location.href}`
        }, (e, result) => {
            if (e) {
                error(e);
            } else {
                success(result);
            }
        });

        /* retrieves userinfo by token + */
        // this.authentication.userInfo(
        //     "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZWxpY2F0ZS1kaXNrLTQwNjQuZXUuYXV0aDAuY29tLyJ9..1h5DHGPw0MpWYLKf.URdfaEAC63SV9kgYPas3exOFSaHL-KzAJRrblEKWDynszR0aQPzojY7jMiZOlcFGWcW33EATC1xBHo5JiqRwyb29RjsACy0X2CIlxZFRW0OTd5ALgsYk8wHlKt2JHMsE4Z4PyUbsRnCo26OYXsqghPwpAnrbb6Pc-zoTOyFM1arcNM_Bf4t5UxUx4Rt7WBDGEToQHJl5dghE9fAJsI1kOD2ytgSUfEZ21L6C2tCt2_aQB04aXJpEUciu16E2PyjptLdOVQ-38NJXUsklpzOiPqTTeoM8oqbJUqeUiPzDk0aIgfYviWoFond7Kh5TD39dF7gv9E8UHftIKW06mJM.MCUJZIAZ4Tx6Fmy8QJdE2g",
        //     (err, res) => {console.log(res)}
        // )

        /* retrieves full user info by id + */
        // this.management.getUser(
        //     "auth0|637f8109fba4652540f8b7df",
        //     (err, res) => {console.log(res)}
        // );

        /**
         * {
         *   "blocked": false,
         *   "email_verified": false,
         *   "email": "john.doe@gmail.com",
         *   "phone_number": "+199999999999999",
         *   "phone_verified": false,
         *   "user_metadata": {},
         *   "app_metadata": {},
         *   "given_name": "John",
         *   "family_name": "Doe",
         *   "name": "John Doe",
         *   "nickname": "Johnny",
         *   "picture": "https://secure.gravatar.com/avatar/15626c5e0c749cb912f9d1ad48dba440?s=480&r=pg&d=https%3A%2F%2Fssl.gstatic.com%2Fs2%2Fprofiles%2Fimages%2Fsilhouette80.png",
         *   "verify_email": false,
         *   "verify_phone_number": false,
         *   "password": "secret",
         *   "connection": "Initial-Connection",
         *   "client_id": "DaM8bokEXBWrTUFCiJjWn50jei6ardyX",
         *   "username": "johndoe"
         * }
         */
        // this.management.patchUserAttributes(
        //     "auth0|637f8109fba4652540f8b7df",
        //     {
        //         picture: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
        //     },
        //     (err, res) => {console.log(res)}
        // );

        // client_id=U7nzxfHe8tXAqZ6TcJvT3yAPuBLvO5S9
        // response_type=token
        // state=H6kVTog1Xsf7TeO-lzHUVamct~~TnPfO
        // login_ticket=7uSU-lIYDSesFXZRj8lCu3CRFYfheoQK
        // scope=openid%20profile%20email
        // auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xOS4yIn0%3D

        // =====================

        // access_token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZWxpY2F0ZS1kaXNrLTQwNjQuZXUuYXV0aDAuY29tLyJ9..1h5DHGPw0MpWYLKf.URdfaEAC63SV9kgYPas3exOFSaHL-KzAJRrblEKWDynszR0aQPzojY7jMiZOlcFGWcW33EATC1xBHo5JiqRwyb29RjsACy0X2CIlxZFRW0OTd5ALgsYk8wHlKt2JHMsE4Z4PyUbsRnCo26OYXsqghPwpAnrbb6Pc-zoTOyFM1arcNM_Bf4t5UxUx4Rt7WBDGEToQHJl5dghE9fAJsI1kOD2ytgSUfEZ21L6C2tCt2_aQB04aXJpEUciu16E2PyjptLdOVQ-38NJXUsklpzOiPqTTeoM8oqbJUqeUiPzDk0aIgfYviWoFond7Kh5TD39dF7gv9E8UHftIKW06mJM.MCUJZIAZ4Tx6Fmy8QJdE2g
        // scope=openid%20profile%20email
        // expires_in=7200
        // token_type=Bearer
        // state=OUT.LA8mrky5XOIOjzIld7xAHXh7RvPV

        // this.userPool.authorize({
        //     redirectUri: "http://localhost:8000"
        // });

        // this.userPool.parseHash({ hash: window.location.hash }, function(err, authResult) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     // The contents of authResult depend on which authentication parameters were used.
        //     // It can include the following:
        //     // authResult.accessToken - access token for the API specified by `audience`
        //     // authResult.expiresIn - string with the access token's expiration time in seconds
        //     // authResult.idToken - ID token JWT containing user profile information
        //     this.userPool.client.userInfo(authResult.accessToken, function(err, user) {
        //         // Now you have the user's information
        //     });
        // });
    }

    /**
     * @method logout
     */
    logout() {
        this.userPool.logout({
            // returnTo: window.location.href
            returnTo: `https://local.bilmor.online:8443/logout?redirectTo=${window.location.href}`,
            federated: true
        });

        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    /**
     * @method getUser
     * @param success {Function}
     * @param error {Function}
     */
    getUser(success, error) {
        if (this.user.id) {
            this.management.getUser(
                this.user.id,
                (e, response) => {
                    if (e) {
                        error(e);
                    } else {
                        success(response);
                    }
                }
            );
        } else {
            error(new Error("No user in local storage found"));
        }

        // this.management.patchUserMetadata("auth0|637f8109fba4652540f8b7df", { "favorite_color": "blue"}, (a, b) => {
        //     console.log(a, b)
        // });
    }

    // refreshToken(success, error) {
    //     localStorage.setItem("loginFromUrl", window.location.href);
    //
    //     this.userPool.checkSession({
    //         redirectUri: `https://local.bilmor.online:8443/auth?redirectTo${window.location.href}`
    //     }, function (err, authResult) {
    //         // err if automatic parseHash fails
    //         if (err) {
    //             error(err);
    //         } else {
    //             localStorage.setItem("token", authResult.accessToken);
    //
    //             success(authResult);
    //         }
    //     });
    // }

    uploadAvatar(url, success, error) {
        this.management.patchUserMetadata(
            this.user.id,
            {
                picture: url // "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
            },
            (err, res) => {
                if (err) {
                    error(err);
                } else {
                    success(this.convertToProfileEntity(res));
                }
            }
        );
    }

    /**
     * @method convertToProfileEntity
     * @param profile {*}
     * @returns {Profile}
     */
    convertToProfileEntity(profile) {
        return new ProfileEntity(profile);
    }
}

let authorization = new Authorization();

export default {
    getInstance() {
        return authorization;
    }
}
