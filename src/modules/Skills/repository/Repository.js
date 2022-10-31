import developing from "./developing";
import undeveloping from "./undeveloping";
import ariaBasic from "./aria-basic";
import ariaSubstrate from "./aria-substrate";
import ariaUndeveloping from "./aria-undeveloping";
import fuocoBasic from "./fuoco-basic";
import fuocoSubstrate from "./fuoco-substrate";
import fuocoUndeveloping from "./fuoco-undeveloping";
import acquaBasic from "./acqua-basic";
import acquaSubstrate from "./acqua-substrate";
import acquaUndeveloping from "./acqua-undeveloping";

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

    /**
     * @public
     * @method getFuocoBasicItems
     * @param success {Function}
     * @returns {Array}
     */
    getFuocoBasicItems(success) {
        return success(fuocoBasic);
    }

    /**
     * @public
     * @method getFuocoSubstrateItems
     * @param success {Function}
     * @returns {Array}
     */
    getFuocoSubstrateItems(success) {
        return success(fuocoSubstrate);
    }

    /**
     * @public
     * @method getFuocoUndevelopingItems
     * @param success {Function}
     * @returns {Array}
     */
    getFuocoUndevelopingItems(success) {
        return success(fuocoUndeveloping);
    }

    /**
     * @public
     * @method getAcquaBasicItems
     * @param success {Function}
     * @returns {Array}
     */
    getAcquaBasicItems(success) {
        return success(acquaBasic);
    }

    /**
     * @public
     * @method getAcquaSubstrateItems
     * @param success {Function}
     * @returns {Array}
     */
    getAcquaSubstrateItems(success) {
        return success(acquaSubstrate);
    }

    /**
     * @public
     * @method getAcquaUndevelopingItems
     * @param success {Function}
     * @returns {Array}
     */
    getAcquaUndevelopingItems(success) {
        return success(acquaUndeveloping);
    }
}



export default Repository;
