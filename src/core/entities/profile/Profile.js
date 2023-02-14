let a = {
    created_at:
        "2022-11-24T14:34:49.788Z",
    email:
        "warhauslive@gmail.com",
    email_verified:
        true,
    identities:
        [{
            connection:
                "Username-Password-Authentication",
            isSocial:
                false,
            provider:
                "auth0",
            user_id:
                "637f8109fba4652540f8b7df",
        }],
    last_ip:
        "85.238.101.65",
    last_login:
        "2022-11-30T16:30:48.741Z",
    logins_count:
        51,
    name:
        "warhauslive@gmail.com",
    nickname:
        "warhauslive",
    picture:
        "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    updated_at:
        "2022-11-30T16:30:48.741Z",
    user_id:
        "auth0|637f8109fba4652540f8b7df",
    user_metadata:
        {
            favorite_color: 'blue'
        }
}


import Entity from "src/core/entities/Entity";
// import Image from "app/core/entities/image/Image";
// import Bonus from "app/core/entities/bonus/Bonus";
// import Strings from "app/core/utilites/strings";

class Profile extends Entity {
    constructor(props) {
        super(props);

        // this.strings = Strings.getInstance();
    }

    /**
     * @method getId
     * @returns {string|number}
     */
    getId() {
        return this.entity.user_id || "";
    }

    /**
     * @public
     * @method getName
     * @returns {string}
     */
    getName() {
        return this.entity.name || "";
    }

    /**
     * @public
     * @method getAvatar
     * @returns {string}
     */
    getAvatar() {
        return this.entity.user_metadata.picture || this.entity.picture || "";
    }

    // /**
    //  * @public
    //  * @method getSocialAccounts
    //  * @returns {Array}
    //  */
    // getSocialAccounts() {
    //     return (this.entity.socialAccounts || []).map(function (item) {
    //         return {
    //             getName() {
    //                 return item.name || "";
    //             },
    //             getUrl() {
    //                 return item.url || "";
    //             }
    //         };
    //     });
    // }

    // /**
    //  * @public
    //  * @method getUrl
    //  * @returns {string}
    //  */
    // getUrl() {
    //     return this.entity.url || "";
    // }

    /**
     * @public
     * @method getEmail
     * @returns {string}
     */
    getEmail() {
        return this.entity.email || "";
    }

    // /**
    //  * @method getPhone
    //  * @return {string}
    //  */
    // getPhone() {
    //     return this.entity.phone || "";
    // }

    // /**
    //  * @public
    //  * @method getGender
    //  * @returns {string}
    //  */
    // getGender() {
    //     return this.entity.gender || "";
    // }
}

export default Profile;
