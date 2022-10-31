/**
 * @example
 *      <div class="tabs whatever-class__tabs">
 *         <div class="tabs__header">
 *             <div class="tabs__items">
 *                 <div class="tabs__item active" data-id="title1">
 *                     Название 1
 *                 </div>
 *
 *                 <div class="tabs__item" data-id="title2">
 *                     Название 2
 *                 </div>
 *             </div>
 *         </div>
 *
 *         <div class="tabs__body">
 *             <div class="tabs__content" data-id="title1">
 *                 Контент 1
 *             </div>
 *
 *             <div class="tabs__content" data-id="title2">
 *                 Контент 2
 *             </div>
 *         </div>
 *     </div>
 *
 * @constructor
 * @param htmlElement {HTMLElement}
 */
class Tabs {
    constructor(htmlElement) {
        this.root = htmlElement;
        this.tabsButtons = Array.from(this.root?.querySelectorAll(".tabs__item") || []);
        this.tabsContents = Array.from(this.root?.querySelectorAll(".tabs__content") || []);

        this.classNames = {
            active: "active"
        };

        this._disableActiveTab = this._disableActiveTab.bind(this);
    }

    /**
     * @private
     * @method _getActiveContent
     * @returns {HTMLElement}
     */
    _getActiveContent() {
        let activeTabId = this._getActiveTab().dataset.id;

        return this.tabsContents.find((item) => item.dataset.id === activeTabId);
    }

    /**
     * @private
     * @method _getActiveTab
     * @returns {HTMLElement}
     */
    _getActiveTab() {
        return this.tabsButtons.find((item) => item.classList.contains(this.classNames.active));
    }

    /**
     * @private
     * @method _setActiveTab
     * @param tab {HTMLElement}
     * @returns {Tabs}
     */
    _setActiveTab(tab) {
        tab.classList.add(this.classNames.active);

        return this;
    }

    /**
     * @private
     * @method _setActiveContent
     * @param content
     * @returns {Tabs}
     */
    _setActiveContent(content) {
        content.style.display = "block";

        return this;
    }

    /**
     * @private
     * @method _disableActiveTab
     * @param tab {HTMLElement}
     * @returns {Tabs}
     */
    _disableActiveTab(tab) {
        tab.classList.remove(this.classNames.active);

        return this;
    }

    /**
     * @private
     * @method _hideContent
     * @param content {HTMLElement}
     * @returns {Tabs}
     */
    _hideContent(content) {
        content.style.display = "none";

        return this;
    }

    /**
     * @private
     * @method _hideAllContents
     * @returns {Tabs}
     */
    _hideAllContents() {
        this.tabsContents.forEach(this._hideContent);

        return this;
    }

    /**
     * @private
     * @method _removeAllActiveTabs
     * @returns {Tabs}
     */
    _removeAllActiveTabs() {
        this.tabsButtons.forEach(this._disableActiveTab);

        return this;
    }

    /**
     * @private
     * @method _addEventListeners
     * @returns {Tabs}
     */
    _addEventListeners() {
        this.tabsButtons.forEach((item) => {
            item.addEventListener("click", (e) => {
                let currentItem = e.target.closest(".tabs__item");

                this
                    ._removeAllActiveTabs()
                    ._hideAllContents()
                    ._setActiveTab(currentItem)
                    ._setActiveContent(this._getActiveContent());
            });
        });

        return this;
    }

    /**
     * @private
     * @method _initActiveTab
     * @returns {Tabs}
     */
    _initActiveTab() {
        if (!this._getActiveTab()) {
            this._setActiveTab(this.tabsButtons[0]);
        }

        // todo remove active classes from other tabs

        return this;
    }

    /**
     * @public
     * @method init
     * @returns {void}
     */
    init() {
        if (this.root && this.tabsButtons.length && this.tabsContents.length) {
            this
                ._hideAllContents()
                ._initActiveTab()
                ._setActiveContent(this._getActiveContent())
                ._addEventListeners();
        }
    }
}

export default Tabs;

