import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount( s1, s2 ) {
 let obj1=[...s1].reduce((a,c)=>(a[c]=(a[c]||0)+1,a),{})
 let obj2=[...s2].reduce((a,c)=>(a[c]=(a[c]||0)+1,a),{})
 let count=0
for(let k in obj1){
  if(obj2[k])count+=Math.min(obj1[k],obj2[k])
}
return count
}
