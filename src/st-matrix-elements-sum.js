import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(/* m */) {
  /* let arr=[]
  for(let i=0;i<m.length;i++){
    let a=[]
    for(let j=0;j<m[1].length;j++){
      a.push(m[j][i])
    }
    arr.push(a)
    a=[]
  }
  return arr//.map((x,i)=>x.reverse()
  //.slice(x.reverse().findIndex(y=>y==0)>-1?x.reverse().findIndex(y=>y==0):x.length)
  //.reduce((a,c)=>a+c,0)).reduce((a,c)=>+c,0) */
  throw new NotImplementedError('Not implemented');

}
