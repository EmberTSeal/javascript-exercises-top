const removeFromArray = function(arr = []) {
    for(let i = 1; i< arguments.length ; i++){
        for(let j = 0; j< arr.length; j++){
            if(arr[j] === arguments[i])
                arr.splice(j, 1);
        }
    }
    return arr;
};

//removeFromArray([1,2,3,4, 23 , 12, 3], 3);
// Do not edit below this line
module.exports = removeFromArray;
