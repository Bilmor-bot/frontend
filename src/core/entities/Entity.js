class Entity {
    constructor(entity) {
        this.entity = Object.assign(entity || {});

        this.TargetConstructor = new.target;
    }

    /**
     * @method getId
     * @returns {string|number}
     */
    getId() {
        return this.entity.id || "";
    }

    /**
     * @method setId
     * @param value {string|number}
     * @returns {Object}
     */
    setId(value) {
        if (value) {
            this.entity.id = value;
        }

        return this;
    }

    /**
     * @method copy
     * @returns {Object}
     */
    copy() {
        return new this.TargetConstructor(this.entity);
    }

    /**
     * @method getEntity
     * @param [toJson] {boolean}
     * @returns {string|Object}
     */
    getEntity(toJson) {
        return toJson ? JSON.stringify(this.entity) : Object.assign(this.entity);
    }
}

export default Entity;
