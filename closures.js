let givenArray = [1,1,1,1,2,3,3,2,4,5,6];

let findDuplicateFromArray = function(arr){

    let count = {};
    let dup = [];

    for ( let i of arr){
        count[i] = (count[i] || 0) +1;
    }

    for( let j in count){
        if(count[j] > 1){
            dup.push(isNaN(j) ? j : Number(j));
        }
    }
    return dup;
        
};

console.log(findDuplicateFromArray(givenArray))