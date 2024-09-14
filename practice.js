// function findMissingNumber(arr){
//     let ar = [];
//     for(i = 0; i <= 9; i++){
//         if(arr.includes[i]){
//             ar.push(i);
//         }
//     }
//     return ar;
    
       
    
//   }
  
//   let arrays = [1, , 3, , 5, 6, , 8, 9];
//   let ans = findMissingNumber(arrays);
//   console.log(ans);


// function findMissingNumber(arr) {
//     for (let i = 0; i <= 9; i++) {
//         if (arr[i + 1] !== arr[i] + 1) {
//             return arr[i] + 1;
//         }
//     }
// }
// const arr = [1, 2, 4];
// console.log(findMissingNumber(arr));  

// function flattenArray(arr) {
//     let array = [];
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             array = array.concat(flattenArray(arr[i]));
            
//         }
//         else{
//             array.push(arr[i])
//         }
//        }
//     return array;
   
// }


// const inputArray= [1, [2, [3, 4]], 5, [6]];
// let ar = flattenArray(inputArray);
// console.log(ar)

// function canEarnBonus(positionA, positionB) {
//     if(positionB > positionA && positionB - positionA <= 6 ){
//         return true;
//     }
//     return false;
        
// }

// console.log(canEarnBonus(11, 9));

// function potatoes(str) {

// }

// console.log(potatoes('potato'));
