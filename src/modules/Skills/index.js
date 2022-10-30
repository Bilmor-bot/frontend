import Repository from "./repository/Repository";

import Accordion from "components/accordion/main";

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
            undevelopingItems: []
        };

        return new Promise((resolve) => {
            Promise.all([
                this._getDevelopingItems(initialData),
                this._getUndevelopingItems(initialData),
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
            });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new SkillsPage({
        Repository: new Repository()
    }).init();
});
