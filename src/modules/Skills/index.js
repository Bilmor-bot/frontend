import Repository from "./repository/Repository";

import Accordion from "components/accordion/main";
import Tabs from "components/tabs/main";

import "./styles/index.scss";

class SkillsPage {
    constructor(dependencies) {
        this.Repository = dependencies.Repository;
    }

    /**
     * @private
     * @method _getAccordionItems
     * @param resultContainer {Object}
     * @returns {Promise}
     */
    _getAccordionItems(resultContainer) {
        return new Promise((resolve) => {
            this.Repository.getAccordionItems((items) => {
                resultContainer.accordionItems = items;
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
            accordionItems: []
        };

        return new Promise((resolve) => {
            Promise.all([
                this._getAccordionItems(initialData)
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
                    document.querySelector(".accordion"),
                    initialData.accordionItems // todo entity
                ).init();

                new Tabs().init(
                    document.querySelector(".tabs")
                );
            });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new SkillsPage({
        Repository: new Repository()
    }).init();
});
