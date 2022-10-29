/**
 * @example
 * <div class="accordion whatever-class__accordion></div>
 *
 * items = [
 *    {
 *      header: text|html
 *      body: text|html
 *    }
 * ];
 *
 * @constructor
 * @param htmlElement {HTMLElement}
 * @param items {Array}
 */
class Accordion {
    constructor(htmlElement, items) {
        this.root = htmlElement;
        this.items = items;
    }

    /**
     * @private
     * @method _renderItem
     * @param item {Object}
     * @returns {string}
     */
    _renderItem(item) {
        return `
            <div class="accordion__item">
                <div class="item__header">
                    ${item.header}
                </div>

                <div class="item__body">
                    ${item.body}
                </div>
            </div>
        `;
    }

    /**
     * @private
     * @method _renderItems
     * @returns {Accordion}
     */
    _renderItems() {
        this.root.innerHTML = "";

        this.items.forEach((item) => {
            this.root.innerHTML += this._renderItem(item);
        });

        return this;
    }

    /**
     * @private
     * @method _addListeners
     * @returns {Accordion}
     */
    _addListeners() {
        let items = this.root.querySelectorAll(".item__header");

        items.forEach((item) => {
            item.addEventListener("click", () => {
                item
                    .closest(".accordion__item")
                    .classList.toggle("active");
            });
        });

        return this;
    }

    /**
     * @public
     * @method init
     * @returns {void}
     */
    init() {
        if (this.root && this.items?.length) {
            this
                ._renderItems()
                ._addListeners();
        }
    }
}

export default Accordion;
