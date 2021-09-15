import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
 return !str?'':str.match(/(.)\1*/g).map(x=>x.length.toString()+x[0]).join``.replace(/1/g,'')
}
