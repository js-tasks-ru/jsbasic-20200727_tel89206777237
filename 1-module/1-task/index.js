/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n){
  if(n==0) {
    return 1
  } else {
   let a = n;
   while(a>1){
   a--;
   n*=a;
    
  }
   return n}
}
