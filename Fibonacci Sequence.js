//  first method
// function printFibonacci(n) {
// let n1=0,n2=1,nextTerm;
//
//  for( let i=1; i<=n; i++) {
//      console.log(n1);
//      nextTerm = n1 +n2;
//      n1 = n2
//      n2=nextTerm
//  }
// }
// printFibonacci(7)

//second method
function fibonacci(n) {
    if (n<2) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
function printFibonacci(n) {
    for(let i=0; i<n; i++) {
        console.log(fibonacci(i))
    }
}
printFibonacci(7)