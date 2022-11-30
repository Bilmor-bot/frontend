import auth0 from 'auth0-js';

class Authorization {
    constructor() {
        this.userPool = new auth0.WebAuth({
            domain: 'delicate-disk-4064.eu.auth0.com',
            clientID: 'U7nzxfHe8tXAqZ6TcJvT3yAPuBLvO5S9',
            responseType: "token"
        });

        this.management = new auth0.Management({
            domain: 'delicate-disk-4064.eu.auth0.com',
            token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InIwN3ExTC0tbFpva29PVnpPZXN4eSJ9.eyJpc3MiOiJodHRwczovL2RlbGljYXRlLWRpc2stNDA2NC5ldS5hdXRoMC5jb20vIiwic3ViIjoiV1p3a3huQlNEWXpMdU5ReEEzemVmNlZKb1gzUE5SS2FAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGVsaWNhdGUtZGlzay00MDY0LmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjY5MzA2ODc0LCJleHAiOjE2NjkzOTMyNzQsImF6cCI6Ildad2t4bkJTRFl6THVOUXhBM3plZjZWSm9YM1BOUkthIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgcmVhZDpvcmdhbml6YXRpb25zX3N1bW1hcnkgY3JlYXRlOmFjdGlvbnNfbG9nX3Nlc3Npb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.1orGFKsy0afuU9aH6YEJQ00OqZh9AyP8Ty8YnuWo3c-rYSzJ2BxbMdG98KMDn7QyMIvDpwLzCA6KL42d8CmFIaTiYONRiQM9cNZnEU321v5PuVMqlerHl93DCadqCI_UZi6eVpi_Mu9l5_Miqfgxi18cGjamFltkEuZoGrf9of17TlqI5Lf5yOMgSUWhxijJfscEVKhCYafmPJ8utgshah-O6Ub2NpnYpH2edn4uN6bt5GJQIUBNr5SGOglxizJhLvkGpek5tqMrG46M74S-PrPIiAWrCQs4fXsof0SLXJdxaS7kSWXnF6r0572pgyFGs8jRjvd8Bi-YBwN84_PVvw'
        });

        this.authentication = new auth0.Authentication({
            domain: 'delicate-disk-4064.eu.auth0.com',
            clientID: 'U7nzxfHe8tXAqZ6TcJvT3yAPuBLvO5S9',
            responseType: "token"
        });
    }

    register() {
        this.userPool.signup({
            username: "warhauslive@gmail.com",
            password: "753119Ar",
            connection: "Username-Password-Authentication"
        }, (a) => {
            console.log(a);
        });
    }

    login() {
        // this.userPool.crossOriginVerification();

        this.userPool.login({
            username: "warhauslive@gmail.com",
            password: "753119Ar",
            // realm: "Username-Password-Authentication"
        }, (a, b) => {
            console.log(a, b);
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
}

let authorization = new Authorization();

export default {
    getInstance() {
        return authorization;
    }
}
