import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
 const turns=2**disksNumber-1//https://en.wikipedia.org/wiki/Tower_of_Hanoi#:~:text=The%20minimal%20number%20of%20moves,is%20the%20number%20of%20disks.
 return {turns:turns, seconds:Math.floor(turns/(turnsSpeed/3600))}
}
