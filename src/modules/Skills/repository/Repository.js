import developing from "./developing";
import undeveloping from "./undeveloping";

class Repository {
    // constructor() {
    //
    // }

    /**
     * @public
     * @method getDevelopingItems
     * @param success {Function}
     * @returns {Array}
     */
    getDevelopingItems(success) {
        return success(developing);
    }

    /**
     * @public
     * @method getUndevelopingItems
     * @param success {Function}
     * @returns {Array}
     */
    getUndevelopingItems(success) {
        return success(undeveloping);
    }
}

export default Repository;
