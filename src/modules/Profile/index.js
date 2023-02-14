import AuthorizationService from "src/services/authorization";

// import Accordion from "components/accordion/main";

// import Repository from "./repository/Repository.js";

import View from "./view/Profile.js";

import "./styles/index.scss";

class SkillsPage {
    constructor(dependencies) {
        // this.Repository = dependencies.Repository;

        this._authorizationService = dependencies.AuthorizationService;
    }

    /**
     * @private
     * @method _getUser
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getUser(resultContainer) {
        return new Promise((resolve) => {
            this._authorizationService.getUser((user) => {
                console.log(user)
                resultContainer.profile = this._authorizationService.convertToProfileEntity(user);

                resolve();
            }, resolve);
        });
    }

    // _refreshToken() {
    //     return new Promise((resolve) => {
    //         this._authorizationService.refreshToken((res) => {
    //             console.log(res);
    //
    //             resolve();
    //         }, resolve);
    //     });
    // }

    uploadAvatar(url, success, error) {
        this._authorizationService.uploadAvatar(url, success, error);
    }

    logout() {
        this._authorizationService.logout();

        return this;
    }

    /**
     * @private
     * @method _getInitialData
     * @returns {Promise}
     */
    _getInitialData() {
        let initialData = {
            profile: {}
        };

        return new Promise((resolve) => {
            Promise.all([
                // this._refreshToken(),
                this._getUser(initialData)
            ]).then(resolve);
        })
            .then(() => initialData)
            .catch(() => initialData);
    }

    /**
     * @public
     * @method init
     * @returns {void}
     */
    init() {
        this
            ._getInitialData()
            .then((initialData) => {
                new View(
                    this,
                    initialData.profile
                ).init();
            });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new SkillsPage({
        AuthorizationService: AuthorizationService.getInstance()
    }).init();
});
