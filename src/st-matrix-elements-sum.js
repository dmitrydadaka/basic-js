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
export default function getMatrixElementsSum( m ) {
  let result=0
  for(let i=0;i<m[0].length;i++){
    for(let j=0;j<m.length;j++){
      if(m[j][i]!=0) result+=m[j][i]
       else break
    }
    
  }
  return result
}
