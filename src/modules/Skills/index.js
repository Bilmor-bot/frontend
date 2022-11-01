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
     * @method _getAriaUndevelopingItems
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
     * @method _getFuocoBasicItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getFuocoBasicItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getFuocoBasicItems((items) => {
                resultContainer.fuocoBasicItems = items;
            });

            resolve();
        });
    }

    /**
     * @private
     * @method _getFuocoSubstrateItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getFuocoSubstrateItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getFuocoSubstrateItems((items) => {
                resultContainer.fuocoSubstrateItems = items;
            });

            resolve();
        });
    }

    /**
     * @private
     * @method _getFuocoUndevelopingItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getFuocoUndevelopingItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getFuocoUndevelopingItems((items) => {
                resultContainer.fuocoUndevelopingItems = items;
            });

            resolve();
        });
    }

    /**
     * @private
     * @method _getAcquaBasicItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getAcquaBasicItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getAcquaBasicItems((items) => {
                resultContainer.acquaBasicItems = items;
            });

            resolve();
        });
    }

    /**
     * @private
     * @method _getAcquaSubstrateItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getAcquaSubstrateItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getAcquaSubstrateItems((items) => {
                resultContainer.acquaSubstrateItems = items;
            });

            resolve();
        });
    }

    /**
     * @private
     * @method _getAcquaUndevelopingItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getAcquaUndevelopingItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getAcquaUndevelopingItems((items) => {
                resultContainer.acquaUndevelopingItems = items;
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
            ariaUndevelopingItems: [],
            fuocoBasicItems: [],
            fuocoSubstrateItems: [],
            fuocoUndevelopingItems: [],
            acquaBasicItems: [],
            acquaSubstrateItems: [],
            acquaUndevelopingItems: []
        };

        return new Promise((resolve) => {
            Promise.all([
                this._getDevelopingItems(initialData),
                this._getUndevelopingItems(initialData),
                this._getAriaBasicItems(initialData),
                this._getAriaSubstrateItems(initialData),
                this._getAriaUndevelopingItems(initialData),
                this._getFuocoBasicItems(initialData),
                this._getFuocoSubstrateItems(initialData),
                this._getFuocoUndevelopingItems(initialData),
                this._getAcquaBasicItems(initialData),
                this._getAcquaSubstrateItems(initialData),
                this._getAcquaUndevelopingItems(initialData)
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

                new Accordion(
                    document.querySelector(".fuoco-basic__accordion"),
                    initialData.fuocoBasicItems // todo entity
                ).init();

                new Accordion(
                    document.querySelector(".fuoco-substrate__accordion"),
                    initialData.fuocoSubstrateItems // todo entity
                ).init();

                new Accordion(
                    document.querySelector(".fuoco-undeveloping__accordion"),
                    initialData.fuocoUndevelopingItems // todo entity
                ).init();

                new Accordion(
                    document.querySelector(".acqua-basic__accordion"),
                    initialData.acquaBasicItems // todo entity
                ).init();

                new Accordion(
                    document.querySelector(".acqua-substrate__accordion"),
                    initialData.acquaSubstrateItems // todo entity
                ).init();

                new Accordion(
                    document.querySelector(".acqua-undeveloping__accordion"),
                    initialData.acquaUndevelopingItems // todo entity
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
