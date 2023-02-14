import developing from "./developing.js";
import undeveloping from "./undeveloping.js";
import ariaBasic from "./aria-basic.js";
import ariaSubstrate from "./aria-substrate.js";
import ariaUndeveloping from "./aria-undeveloping.js";
import fuocoBasic from "./fuoco-basic.js";
import fuocoSubstrate from "./fuoco-substrate.js";
import fuocoUndeveloping from "./fuoco-undeveloping.js";
import acquaBasic from "./acqua-basic.js";
import acquaSubstrate from "./acqua-substrate.js";
import acquaUndeveloping from "./acqua-undeveloping.js";
import elementalMagic from "./elemental-magic.js";
import combatMagic from "./combat-magic.js";
import mentalMagic from "./mental-magic.js";
import oneiromancy from "./oneiromancy.js";
import animagia from "./animagia.js";


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

    /**
     * @public
     * @method getElementalMagicItems
     * @param success {Function}
     * @returns {Array}
     */
    getElementalMagicItems(success) {
        return success(elementalMagic);
    }

    /**
     * @public
     * @method getCombatMagicItems
     * @param success {Function}
     * @returns {Array}
     */
    getCombatMagicItems(success) {
        return success(combatMagic);
    }

    /**
     * @public
     * @method getMentalMagicItems
     * @param success {Function}
     * @returns {Array}
     */
    getMentalMagicItems(success) {
        return success(mentalMagic);
    }

    /**
     * @public
     * @method getOneiromancyItems
     * @param success {Function}
     * @returns {Array}
     */
    getOneiromancyItems(success) {
        return success(oneiromancy);
    }

    /**
     * @public
     * @method getAnimagiaItems
     * @param success {Function}
     * @returns {Array}
     */
    getAnimagiaItems(success) {
        return success(animagia);
    }
}



export default Repository;
