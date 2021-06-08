
function findDuplicate(arr) {

    let myset = new Set();
    for(let i=0; i<arr.length; i++) {

        if(myset.has( arr[i]) ) {
            return arr[i];
        } else {
            myset.add(arr[i])
        }
    }
}
arr = [2,4,6,8,2];
console.log(findDuplicate(arr));




