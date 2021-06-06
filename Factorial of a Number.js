
// first method
// function factorial(num) {
//     if (num == 0 || num == 1) {
//         return 1
//     }
//     if (num>1) {
//         let fact = 1;
//         for (let i=num; i>=1; i--){
//             fact = fact * i ;
//         }
//         return fact ;
//     }
// }
// console.log(factorial(5))

//second method
function factorial(num) {
    if (num == 0 || num == 1) {
        return 1
    }
    return  num *factorial(num-1);
}
console.log(factorial(5))