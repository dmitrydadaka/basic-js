import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
 /*  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here */
  return domains.reduce((a,c)=>{
   c=c.split('.').reverse()
   let value=''
   for(let i of c){
     value+='.'+i
     if(a[value]) a[value]+=1
     else a[value]=1
   }
  return a
  },{})
}
