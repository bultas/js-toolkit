/**
 * @param {Array} arr
 * @param filter
 * @returns {boolean}
 */
export const multiCond = (arr, filter) => arr.map(filter).includes(true);
