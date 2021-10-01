import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(s,  options) {

  function repeater1(str, number, separator) {
    if (typeof str === 'undefined') {
      return '';
    }
    return (str+separator).repeat(number&&number>0?number-1:0)+str
  }

  let str = s + repeater1(options.addition, options.additionRepeatTimes, options.additionSeparator ? options.additionSeparator : '|');
  return repeater1(str, options.repeatTimes, options.separator ? options.separator : '+');
}
