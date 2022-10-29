class Repository{
    constructor() {
        this._accordionItems = [
            {
                header: "hello1",
                body: "yes, hello1"
            },
            {
                header: "hello2",
                body: "yes, hello2"
            },
        ]
    }

    /**
     * @public
     * @method getAccordionItems
     * @param success {Function}
     * @returns {Array}
     */
    getAccordionItems(success) {
        return success(this._accordionItems);
    }
}

export default Repository;
