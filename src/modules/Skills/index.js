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
     * @private
     * @method _initAside
     * @returns {void}
     */
    _initAside() {
        let asides = document.querySelectorAll(".skill-page__aside");

        asides.forEach((aside) => {
            let links = aside.querySelectorAll("a");

            links.forEach((link) => {
                link.addEventListener("click", (event) => {
                    event.preventDefault();

                    if (document.getElementById(link.dataset.id)) {
                        window.scrollTo({
                            top: document.getElementById(link.dataset.id).offsetTop - 20,
                            behavior: "smooth"
                        });
                    }
                });
            });
        });
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

                new Tabs(
                    document.querySelector(".tabs")
                ).init();

                this._initAside();
            });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new SkillsPage({
        Repository: new Repository()
    }).init();
});
