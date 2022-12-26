/**
 * 
 * ```javascript
 * // Simple check if a string has to many Caps
 * const capsAllowed = require("@tgxd/caps-allowed")
 * 
 * let outcome = capsAllowed("I love this Package", 40)
 * 
 * const isMaxCaps = outcome.isMaxCaps
 * 
 * if(isMaxCaps) {
 *  console.log("Too many Caps")
 * } else {
 *  // This will be executed, because the String has "Not too many Caps"
 *  console.log("Not too many Caps")
 * }
 * ```
 */
module.exports = function (string = undefined, maxCapsPercentage = 65, options = {fractionDigitsOnOutcome, minStringLength} = {fractionDigitsOnOutcome: 1, minStringLength: 0}) {
    if(string == "") string = undefined
    if(string == undefined) throw new TypeError("You need to define a String")
    
    if(isNaN(maxCapsPercentage)) throw new TypeError("maxCapsPercentage must be a Number")
    
    if(options.fractionDigitsOnOutcome == undefined) options.fractionDigitsOnOutcome = 1
    if(options.fractionDigitsOnOutcome < 0) options.fractionDigitsOnOutcome = 0
    if(options.fractionDigitsOnOutcome > 100) options.fractionDigitsOnOutcome = 100

    if(options.minStringLength == undefined) options.minStringLength = 0
    if(isNaN(options.minStringLength)) throw new TypeError("options.minStringLength must be a Number")
    
    let stringLength = string.length
    let capsLength = string.match(/[A-Z]/g).length
    let capsPercentage = (capsLength * 100 / stringLength).toFixed(options.fractionDigitsOnOutcome)

    let maxCaps = false
    if(capsPercentage >= maxCapsPercentage && stringLength > options.minStringLength) maxCaps = true
    
    return Object({
        string: string,
        minStringLength: options.minStringLength,
        stringLength: stringLength,
        capsLength: capsLength,
        capsPercentage: capsPercentage,
        maxCapsPercentage: maxCapsPercentage,
        isMaxCaps: maxCaps
    })
}