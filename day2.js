// const array = [1,2,3,4,5,6]
// const linearsearch = (val,arr) =>{
//     for (i=0; i<val; i++){
//         if(arr[i] == val)
//         return i
//     }
//     return linearsearch()

// }
// console.log(linearsearch(2,array))

function factorial(x){
    if( x==1){
        return x
    }
    else{
        return x * factorial(x - 1)
    }
}
console.log(factorial(5))


// const array = [1,2,3,4,5]
// const linearsearch =(val,arr, len) =>{
//     if(len >array.length){
//         return i
//     }
//     {
//         return linearsearch(0,array)
//     }

// }
// console.log(linearsearch(0,array,array.length))

const linearsearch =(val, arr , len) =>{
    if(len < 0 ) return -1
    if(arr[len -1] == val ) return len 
    return linearsearch(val, arr, len - 1 )
}
const arr =[1,2,3,4,5,6,7,8]
console.log(linearsearch(0,arr,arr.length))


////selection sort

const swap = (i, j, arraysort) => {
    const swapping = arraysort[i];
    arraysort[i] = arraysort[j];
    arraysort[j] = swapping;
  };
const select=(arraysort)=> { 
    var n = arraysort.length;
        
    for(var i = 0; i < n-1; i++) {
        var min = i;
        for(var j = i+1; j < n; j++){
            if(arraysort[j] < arraysort[min]) {
                min=j; 
            }
         }
            swap(i, min, arraysort)
    }
    return arraysort;
}
console.log(select([2,4,7,3,1,9]))