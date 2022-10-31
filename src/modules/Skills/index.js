import Repository from "./repository/Repository";

import Accordion from "components/accordion/main";
import Tabs from "components/tabs/main";

import Aside from "./aside";

import "./styles/index.scss";

class SkillsPage {
    constructor(dependencies) {
        this.Repository = dependencies.Repository;
    }

    /**
     * @private
     * @method _getDevelopingItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getDevelopingItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getDevelopingItems((items) => {
                resultContainer.developingItems = items;
            });

            resolve();
        });
    }

    /**
     * @private
     * @method _getAriaBasicItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getAriaBasicItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getAriaBasicItems((items) => {
                resultContainer.ariaBasicItems = items;
            });

            resolve();
        });
    }

    /**
     * @private
     * @method _getAriaSubstrateItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getAriaSubstrateItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getAriaSubstrateItems((items) => {
                resultContainer.ariaSubstrateItems = items;
            });

            resolve();
        });
    }

    /**
     * @private
     * @method _getAriaSubstrateItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getAriaUndevelopingItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getAriaUndevelopingItems((items) => {
                resultContainer.ariaUndevelopingItems = items;
            });

            resolve();
        });
    }

    /**
     * @private
     * @method _getUndevelopingItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getUndevelopingItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getUndevelopingItems((items) => {
                resultContainer.undevelopingItems = items;
            });

            resolve();
        });
    }

    /**
     * @private
     * @method _getInitialData
     * @returns {Promise}
     */
    _getInitialData() {
        let initialData = {
            developingItems: [],
            undevelopingItems: [],
            ariaBasicItems: [],
            ariaSubstrateItems: [],
            ariaUndevelopingItems: []
        };

        return new Promise((resolve) => {
            Promise.all([
                this._getDevelopingItems(initialData),
                this._getUndevelopingItems(initialData),
                this._getAriaBasicItems(initialData),
                this._getAriaSubstrateItems(initialData),
                this._getAriaUndevelopingItems(initialData)
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
                new Accordion(
                    document.querySelector(".developing__accordion"),
                    initialData.developingItems // todo entity
                ).init();

                new Accordion(
                    document.querySelector(".undeveloping__accordion"),
                    initialData.undevelopingItems // todo entity
                ).init();

                new Accordion(
                    document.querySelector(".aria-basic__accordion"),
                    initialData.ariaBasicItems // todo entity
                ).init();

                new Accordion(
                    document.querySelector(".aria-substrate__accordion"),
                    initialData.ariaSubstrateItems // todo entity
                ).init();

                new Accordion(
                    document.querySelector(".aria-undeveloping__accordion"),
                    initialData.ariaUndevelopingItems // todo entity
                ).init();

                new Tabs(
                    document.querySelector(".tabs")
                ).init();

                new Aside().init();
            });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new SkillsPage({
        Repository: new Repository()
    }).init();
});
