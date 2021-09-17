import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 export default function transform(arr) {
 if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
if(!arr.length) return []
let a=[]
let b=false
 for (let i = 0; i < arr.length; i++) {
  const value = arr[i];
if (value === '--double-prev' && i !== 0 && !b) {
    a.push(arr[i - 1]);
  }
if (value === '--discard-prev' && i !== 0 && !b) {
    a.pop();
    
  }
if (value === '--discard-next' && i !== arr.length - 1) {
    i++;
    b = true;
  }
if (value === '--double-next'  && i !== arr.length - 1 ) {
    a.push(arr[i + 1]);
  }
if (value !== '--double-next' && value !== '--discard-next' && value !== '--discard-prev' && value !== '--double-prev') {
    a.push(arr[i]);
  }

  
}
return a;
}



