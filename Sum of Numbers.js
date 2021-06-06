function sum(arr) {


    // first method
//     let num1 = arr[0], num2 = arr[1];
//     let start, end;
//     if (num1<num2){
//         start = num1; end = num2;
//     }else{
//        start = num2 ; end = num1 ;
//     }
//     let sum =0;
//     for(let i=start; i<=end; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// const arr = [4,1];
// const arr1 = [1,4];
// console.log(sum(arr));
// console.log(sum(arr1));

//second method

    const max = Math.max(arr[0],arr[1])
    const min = Math.min(arr[0],arr[1])

    let sum = 0;
    for(let i=min; i<=max; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log( sum([4,1]) );
console.log( sum([1,4]) );