/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */

function checkSpam(str) {
  let str1 = str.toLowerCase();
  if(str1.indexOf('1xbet')!==-1 || str1.indexOf('xxx')!==-1){
  return true
  } else {
  return false
  }
}
