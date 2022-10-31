import developing from "./developing";
import undeveloping from "./undeveloping";
import ariaBasic from "./aria-basic";
import ariaSubstrate from "./aria-substrate";
import ariaUndeveloping from "./aria-undeveloping";

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

    /**
     * @public
     * @method getAriaBasicItems
     * @param success {Function}
     * @returns {Array}
     */
    getAriaBasicItems(success) {
        return success(ariaBasic);
    }

    /**
     * @public
     * @method getAriaSubstrateItems
     * @param success {Function}
     * @returns {Array}
     */
    getAriaSubstrateItems(success) {
        return success(ariaSubstrate);
    }

    /**
     * @public
     * @method getAriaUndevelopingItems
     * @param success {Function}
     * @returns {Array}
     */
    getAriaUndevelopingItems(success) {
        return success(ariaUndeveloping);
    }
}

export default Repository;
